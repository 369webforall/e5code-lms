import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

const updateSchema = z.object({
  payment: z.enum(["completed", "pending"]),
  role: z.enum(["admin", "student", "public"]),
});

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Validate the request body
  const body = await request.json();
  const validation = updateSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 404 });
  }

  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { id: params.id },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid user" }, { status: 404 });
    }

    // Update the user data
    await prisma.user.update({
      where: { id: params.id },
      data: {
        payment: body.payment,
        role: body.role,
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
