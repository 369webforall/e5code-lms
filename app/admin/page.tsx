import React from "react";
import CardBox from "./ui/Card";
import prisma from "@/lib/prisma";

const AdminPage = async () => {
  const recorded = await prisma.user.count({
    where: {
      course: "Recorded Class",
    },
  });

  const fullAccess = await prisma.user.count({
    where: {
      course: "Live Class",
    },
  });

  return (
    <div className="flex w-full h-full mt-4 gap-4">
      <CardBox
        title="Live Access"
        description="Live + Video"
        count={fullAccess}
      />
      <CardBox
        title="Video Access"
        description="Video Access"
        count={recorded}
      />
    </div>
  );
};

export default AdminPage;
