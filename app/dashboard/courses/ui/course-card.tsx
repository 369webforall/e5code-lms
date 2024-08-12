import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
interface Props {
  title: string;
  href: string;
}

import { Card, CardHeader, CardDescription } from "@/components/ui/card";

const CourseCard = ({ title, href }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardDescription className="font-semibold">
          <Button asChild variant="link">
            <Link href={`/dashboard/courses/${href}`}>{title}</Link>
          </Button>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default CourseCard;
