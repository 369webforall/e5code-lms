import Sidebar from "./ui/side-bar";
import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";
async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
  if (!user) {
    redirect("/");
  }
  return (
    <div className="flex gap-2 h-full">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default RootLayout;
