import Link from "next/link";
import UserButton from "./UserButton";
import { getUser } from "@/lib/lucia";
import { Button } from "./ui/button";

export default async function NavBar() {
  const user = await getUser();
  return (
    <header className="sticky top-0 bg-background px-6 shadow-sm">
      <nav className="relative max-w-7xl w-full flex gap-5 md:grid md:grid-cols-12 items-center px-4 md:px-8 mx-auto py-7">
        <div className="md:col-span-3">
          <a href="https://velisaafrica.co.za/academy/" target="-blank">
            <h1 className="text-2xl font-semibold text-green-800">
              Velisa Africa
            </h1>
          </a>
        </div>
        <div className="md:col-span-6">
          <nav className="hidden md:flex justify-center items-center col-span-6 gap-x-3">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/faq">Faq</Link>
            <Link href="/contact">Contact</Link>
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
