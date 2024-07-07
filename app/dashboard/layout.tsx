import Sidebar from "./ui/side-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full">
      <div className="flex h-full gap-2 py-4">
        <Sidebar />
        <div className="flex-1 px-4">{children}</div>
      </div>
    </div>
  );
}
