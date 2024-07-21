import Link from "next/link";
import UserButton from "./UserButton";
import { getUser } from "@/lib/lucia";
import { Button } from "./ui/button";
import Image from "next/image";

export default async function NavBar() {
  const user = await getUser();
  return (
    <header className="w-full border-b">
      <nav className="wrapper flex-between">
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
        <nav className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/faq">Faq</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/demo">Demo_Video</Link>
        </nav>
        <div>
          {user ? (
            <UserButton />
          ) : (
            <Button asChild>
              <Link href={"/authenticate"}>Login or New Account</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
