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
    <div className="h-screen w-full">
      <div className="flex h-full gap-2 py-4">
        <Sidebar />
        <div className="flex-1 px-4">{children}</div>
      </div>
    </div>
  );
}

export default RootLayout;
