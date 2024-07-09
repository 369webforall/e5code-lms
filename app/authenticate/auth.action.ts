"use server";

import { z } from "zod";
import { signUpSchema } from "./SignUpForm";

import { signInSchema } from "./SignInForm";

import prisma from "@/lib/prisma";
import { Argon2id } from "oslo/password";
import { lucia } from "@/lib/lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { generateState, generateCodeVerifier } from "arctic";
import { googleOAuthClient } from "@/lib/googleOauth";

async function generateStudentId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let studentId = "MERN1";
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    studentId += characters[randomIndex];
  }
  return studentId;
}

export const signUp = async (values: z.infer<typeof signUpSchema>) => {
  try {
    // if user already exists, throw an error
    const existingUser = await prisma.user.findUnique({
      where: {
        email: values.email,
      },
      select: {
        name: true,
        email: true,
        role: true,
        picture: true,
        studentId: true,
      },
    });
    if (existingUser) {
      return { error: "User already exists", success: false };
    }

    // Utility function to generate student ID

    const hashedPassword = await new Argon2id().hash(values.password);

    const studentId = (await generateStudentId()).toUpperCase();
    console.log(studentId);

    const user = await prisma.user.create({
      data: {
        email: values.email.toLowerCase(),
        name: values.name,
        hashedPassword,
        course: values.course,
        studentId: studentId,
      },
    });

    // Create a session for the user

    const session = await lucia.createSession(user.id, {});

    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return { message: "Account created successfully", success: true };
  } catch (error) {
    console.error("Error during sign up:", error);
    return { error: "Something went wrong", success: false };
  }
};

export const signIn = async (values: z.infer<typeof signInSchema>) => {
  const user = await prisma.user.findUnique({
    where: {
      email: values.email,
    },
  });
  if (!user || !user.hashedPassword) {
    return { success: false, error: "Invalid Credentials!" };
  }
  const passwordMatch = await new Argon2id().verify(
    user.hashedPassword,
    values.password
  );
  if (!passwordMatch) {
    return { success: false, error: "Invalid Credentials!" };
  }
  // successfully login
  const session = await lucia.createSession(user.id, {});
  const sessionCookie = await lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return { success: true };
};

export const logOut = async () => {
  const sessionCookie = await lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/authenticate");
};

export const getGoogleOauthConsentUrl = async () => {
  try {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();

    cookies().set("codeVerifier", codeVerifier, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    cookies().set("state", state, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    const authUrl = await googleOAuthClient.createAuthorizationURL(
      state,
      codeVerifier,
      {
        scopes: ["email", "profile"],
      }
    );
    return { success: true, url: authUrl.toString() };
  } catch (error) {
    return { success: false, error: "Something went wrong" };
  }
};
