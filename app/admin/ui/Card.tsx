import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface Props {
  title: string;
  description: string;
  count: number;
}

const CardBox = ({ title, description, count }: Props) => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Number of Student: {count} </p>
      </CardContent>
      <CardFooter>
        <Link href="/admin/StudentList">
          <Button variant="secondary">Display List</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardBox;
