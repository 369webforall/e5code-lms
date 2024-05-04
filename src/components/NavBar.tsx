"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import UserButton from "./UserButton";
import { Button } from "./ui/button";

export default function NavBar() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <header className="sticky top-0 bg-background px-6 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
  
        <Link href="/" className="font-bold">
          e5code
        </Link>
        <nav className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/faq">Faq</Link>
          <Link href="/contact">Contact</Link>
          
        </nav>
  
       
        {user && <UserButton user={user} />}
        {!user && session.status !== "loading" && <SignInButton />}
      </nav>
    </header>
  );
}

function SignInButton() {
  return <Button onClick={() => signIn()}>Sign in</Button>;
}
