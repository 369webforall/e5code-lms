"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { courseformSchema, categoryformSchema } from "./courseSchema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type formSchema = z.infer<typeof courseformSchema>;
type categorySchema = z.infer<typeof categoryformSchema>;

type categoryUpdate = categorySchema & {
  id: string;
};

import { createCourse } from "./form.action";

export function CourseForm({ category }: { category: categoryUpdate[] }) {
  const router = useRouter();
  const form = useForm<formSchema>({
    resolver: zodResolver(courseformSchema),
    defaultValues: {
      courseslug: "",
      title: "",
      github: "",
      video: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: formSchema) {
    try {
      await createCourse(values);
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {category.map((item: any) => (
                    <SelectItem value={item.courseslug} key={item.id}>
                      {item.courseslug}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chapter Name</FormLabel>
              <FormControl>
                <Input placeholder="Javascript basic" {...field} />
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
              <FormLabel>Github Link</FormLabel>
              <FormControl>
                <Input placeholder="Github link" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="video"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video Code</FormLabel>
              <FormControl>
                <Input placeholder="course video code" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
