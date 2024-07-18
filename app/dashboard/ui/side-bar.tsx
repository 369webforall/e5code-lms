import React from "react";
import Link from "next/link";
const Sidebar = async () => {
  return (
    <div className="w-[100px]">
      <aside className="flex flex-col gap-2 border-r h-full">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/courses">Course</Link>
        <Link href="/dashboard/bank">Bank Details</Link>
        <Link href="/dashboard/profile">Profile</Link>
      </aside>
    </div>
  );
};

export default Sidebar;
