"use server";
import { z } from "zod";
import { profileSchema } from "../dashboard/profile/_components/ProfileForm";
import prisma from "@/lib/prisma";
export const createProfile = async (values: z.infer<typeof profileSchema>) => {
  try {
    // if user already exists, throw an error
    const existingProfile = await prisma.user.findUnique({
      where: {
        email: values.email,
      },
      select: {
        name: true,
        email: true,
        id: true,
        profile: true,
      },
    });
    if (!existingProfile) {
      return { error: "User not found exists", success: false };
    }

    if (existingProfile.profile.length > 0) {
      return { error: "Profile exists, go to update", success: false };
    }
    const profile = await prisma.profile.create({
      data: {
        name: values.name,
        email: values.email.toLowerCase(),
        address: values.address,
        phone: values.phone,
        payment: values.payment,
        bio: values.bio,
        github: values.github,
        linkedIn: values.linkedIn,
        userId: existingProfile?.id,
      },
    });
    return { message: "Account created successfully", success: true };
  } catch (error) {
    console.error("Error during profile creation:", error);
    return { error: "Something went wrong", success: false };
  }
};

export const updateProfile = async (values: z.infer<typeof profileSchema>) => {
  try {
    // if user already exists, throw an error
    const existingProfile = await prisma.profile.findUnique({
      where: {
        email: values.email,
      },
      select: {
        name: true,
        email: true,
        id: true,
      },
    });
    if (!existingProfile) {
      return { error: "User not found exists", success: false };
    }

    await prisma.profile.update({
      where: {
        id: existingProfile.id,
      },
      data: {
        name: values.name,
        email: values.email.toLowerCase(),
        address: values.address,
        phone: values.phone,
        payment: values.payment,
        bio: values.bio,
        github: values.github,
        linkedIn: values.linkedIn,
      },
    });
    return { message: "Profile updated successfully", success: true };
  } catch (error) {
    console.error("Error during profile update:", error);
    return { error: "Something went wrong", success: false };
  }
};
