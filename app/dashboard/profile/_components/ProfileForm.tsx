"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Profile } from "@prisma/client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createProfile, updateProfile } from "@/app/action/profile.action";
export const profileSchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  address: z.string().min(1).max(100),
  phone: z.string().min(1).max(20),
  payment: z.string().min(5).max(15),
  bio: z
    .string()
    .min(100, {
      message: "Bio must be at least 100 characters.",
    })
    .max(2500, {
      message: "Bio must not be longer than 2500 characters.",
    }),
  github: z.string().url(),
  linkedIn: z.string().url(),
});

const ProfileForm = ({ profile }: { profile?: Profile }) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: profile?.name,
      email: profile?.email,
      address: profile?.address,
      phone: profile?.phone || "",
      bio: profile?.bio,
      payment: profile?.payment || "",
      github: profile?.github || "",
      linkedIn: profile?.linkedIn || "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof profileSchema>) {
    try {
      if (profile) {
        const res = await updateProfile(values);
        if (res.success) {
          toast.success("Account updated successfully");
          router.push("/dashboard");
        } else {
          toast.error(res.error);
        }
      } else {
        const res = await createProfile(values);
        if (res.success) {
          toast.success("Account created successfully");
          router.push("/dashboard");
        } else {
          toast.error(res.error);
        }
      }
    } catch (error) {
      console.log(error);
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }
  return (
    <Card className="min-w-[600px] h-full">
      <CardHeader>
        <CardTitle>Profile Form</CardTitle>
        <CardDescription>
          Create your profile. let&#39;s us know about yourself
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form
            className="flex flex-col gap-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your address..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your phone number..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="github"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github Profile Link</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your github profile link..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedIn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn Profile Link</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your linkedin profile link..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="payment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select payment (completed or pending)</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.name}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Joining for...." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about yourself"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="self-start">
              {profile ? "Update Profile" : "Create Profile"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
