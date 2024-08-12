"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { categoryformSchema } from "./courseSchema";

type formSchema = z.infer<typeof categoryformSchema>;

import { createCategory } from "./form.action";

export function CourseCategoryForm() {
  const router = useRouter();
  const form = useForm<formSchema>({
    resolver: zodResolver(categoryformSchema),
    defaultValues: {
      courseslug: "",
      courseName: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: formSchema) {
    try {
      await createCategory(values);
      router.replace("/admin");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="courseslug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Slug</FormLabel>
              <FormControl>
                <Input placeholder="htmlcss" {...field} />
              </FormControl>
              <FormDescription>course slung,eg. htmlcss</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="courseName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Title</FormLabel>
              <FormControl>
                <Input placeholder="Course Title" {...field} />
              </FormControl>
              <FormDescription>course name, HTML CSS</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
