"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {
  SignUpTab: React.ReactNode;
  SignInTab: React.ReactNode;
};

const TabSwitcher = (props: Props) => {
  return (
    <Tabs defaultValue="login" className="max-w-[500px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="sign-up">Register</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="sign-up">{props.SignUpTab}</TabsContent>
      <TabsContent value="login">{props.SignInTab}</TabsContent>
    </Tabs>
  );
};

export default TabSwitcher;
