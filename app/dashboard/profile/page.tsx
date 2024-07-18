import React from "react";
import ProfileForm from "./_components/ProfileForm";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/lucia";
import prisma from "@/lib/prisma";

const ProfilePage = async () => {
  //protected route
  const user = await getUser();
  if (!user) {
    redirect("/");
  }

  const fetchProfile = await prisma.profile.findUnique({
    where: {
      email: user.email,
    },
  });

  if (!fetchProfile) {
    return <ProfileForm />;
  }

  return <ProfileForm profile={fetchProfile} />;
};

export default ProfilePage;
