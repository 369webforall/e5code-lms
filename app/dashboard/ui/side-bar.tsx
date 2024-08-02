import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const Sidebar = async () => {
  return (
    <div className="w-[150px] border-r h-full">
      <aside className="flex flex-col items-start">
        <Button asChild variant="link">
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <Button asChild variant="link">
          <Link href="/dashboard/courses">Course</Link>
        </Button>
        <Button asChild variant="link">
          <Link href="/dashboard/bank">Bank Details</Link>
        </Button>
        <Button asChild variant="link">
          <Link href="/dashboard/profile">Profile</Link>
        </Button>
      </aside>
    </div>
  );
};

export default Sidebar;
