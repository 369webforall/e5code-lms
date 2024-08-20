import NavBar from "@/components/Navbar/NavBar";
import Footer from "./(public)/ui/footer";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
});
import { cn } from "@/lib/utils";
export const metadata: Metadata = {
  title: {
    template: "%s | Velisa Africa online coaching",
    absolute: "Velisa Africa  online coaching",
  },
  description:
    "Welcome to online Velisa Africa FullStack coaching center.Explore comprehensive online coaching covering Frontend, Backend, MERN Stack.Dive into Data Structures and Algorithms,and DevOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
        suppressHydrationWarning
      >
        <div className="flex h-screen flex-col">
          <NavBar />
          <main className="flex-1 wrapper">{children}</main>
          <Footer />
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}
