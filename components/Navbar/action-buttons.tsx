import UserButton from "./UserButton";
import { Button } from "../ui/button";
import { getUser } from "@/lib/lucia";
import SignOutButton from "./SignOutButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";

import Link from "next/link";

const ActionButtons = async () => {
  const user = await getUser();
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/dashboard">Dashboard</Link>
                  <Link href="/faq">Faq</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/demo">Demo_Video</Link>
                  <div>
                    {user ? (
                      <SignOutButton>Logout</SignOutButton>
                    ) : (
                      <Button asChild>
                        <Link href={"/authenticate"}>Login or New Account</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex md:space-x-4">
        {user ? (
          <UserButton />
        ) : (
          <Button asChild>
            <Link href={"/authenticate"}>Login or New Account</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ActionButtons;
