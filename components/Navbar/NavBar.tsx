import Link from "next/link";
import UserButton from "./UserButton";
import { getUser } from "@/lib/lucia";
import { Button } from "../ui/button";
import { NavigationMenuBar } from "./navigation-bar";
import Logo from "./Logo";
import ActionButtons from "./action-buttons";
export default async function NavBar() {
  const user = await getUser();
  return (
    <header className="w-full border-b">
      <nav className="wrapper flex-between">
        <Logo />
        <NavigationMenuBar />
        <ActionButtons />
      </nav>
    </header>
  );
}
