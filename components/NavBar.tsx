import Link from "next/link";
import UserButton from "./UserButton";
import { getUser } from "@/lib/lucia";
import { Button } from "./ui/button";
import Image from "next/image";

export default async function NavBar() {
  const user = await getUser();
  return (
    <header className="fixed left-0 top-0 bg-background px-6 shadow-sm z-50 w-full">
      <nav className="relative max-w-7xl w-full flex gap-5 md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-4">
        <div className="md:col-span-3">
          <a
            href="https://velisaafrica.co.za/academy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo.png"
              width={200}
              height={50}
              alt="Velisa Africa Academy Logo"
              priority
            />
          </a>
        </div>
        <div className="md:col-span-6">
          <nav className="hidden md:flex justify-center items-center col-span-6 gap-x-3">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/faq">Faq</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/demo">Demo_Video</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-2 ms-auto md:col-span-3">
          {user ? (
            <UserButton />
          ) : (
            <Button variant="destructive">
              <Link href={"/authenticate"}>Login or New Account</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
