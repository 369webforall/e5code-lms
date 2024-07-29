"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  SignUpTab: React.ReactNode;
  SignInTab: React.ReactNode;
};

const TabSwitcher = (props: Props) => {
  return (
    <Tabs defaultValue="login" className="max-w-[500px]">
      <TabsList className="grid w-full grid-cols-2 bg-orange-400">
        <TabsTrigger value="sign-up" className="text-gray-800">
          Register
        </TabsTrigger>
        <TabsTrigger value="login" className="text-gray-800">
          Login
        </TabsTrigger>
      </TabsList>
      <TabsContent value="sign-up">{props.SignUpTab}</TabsContent>
      <TabsContent value="login">{props.SignInTab}</TabsContent>
    </Tabs>
  );
};

export default TabSwitcher;
