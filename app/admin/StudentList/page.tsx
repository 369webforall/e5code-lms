import React from "react";
import { Trash2, BookAIcon } from "lucide-react";
import prisma from "@/lib/prisma";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const StudentList = async () => {
  const students = await prisma.user.findMany({
    where: {
      role: {
        in: ["student", "public"],
      },
    },
    orderBy: {
      name: "asc",
    },
  });
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">SN</TableHead>
            <TableHead className="w-[100px]">StudentId</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Access</TableHead>
            <TableHead>Register Date</TableHead>
            <TableHead>Course</TableHead>
            <TableHead className="text-right">Payment</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium">{student.studentId}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.role}</TableCell>
              <TableCell>{student.createdAt.toDateString()}</TableCell>
              <TableCell>{student.course}</TableCell>
              <TableCell className="text-right">{student.payment}</TableCell>
              <TableCell className="flex items-center justify-end space-x-4">
                <Link href="/">
                  <BookAIcon />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentList;
