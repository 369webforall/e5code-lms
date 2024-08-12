import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { courseslug: string } }
) {
  try {
    // Fetch the courses related to the provided course slug
    const courses = await prisma.course.findMany({
      where: {
        courseslug: params.courseslug,
      },
    });

    if (!courses || courses.length === 0) {
      return NextResponse.json(
        { error: "Invalid course slug" },
        { status: 404 }
      );
    }

    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
