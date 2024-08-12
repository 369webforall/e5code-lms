import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";
import Link from "next/link";

async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  if (user?.role !== "admin") {
    redirect("/");
  }
  return (
    <div className="h-full w-full">
      <div className=" h-full gap-2 py-4">
        <nav className="p-4 bg-slate-800 rounded-sm">
          <nav className="flex items-center space-x-4">
            <Link href="/admin" className="text-white text-lg">
              Admin
            </Link>
            <Link href="/admin/StudentList" className="text-white text-lg">
              StudentList
            </Link>
            <Link href="/admin/category" className="text-white text-lg">
              Add Category
            </Link>
            <Link href="/admin/course" className="text-white text-lg">
              Add Course
            </Link>
          </nav>
        </nav>
        <div className="flex-1 px-4">{children}</div>
      </div>
    </div>
  );
}

export default RootLayout;
