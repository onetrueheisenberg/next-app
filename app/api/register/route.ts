import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(request: NextRequest) {
  const reqJSON = await request.json();
  const isValid = schema.safeParse(reqJSON);
  if (!isValid.success)
    return NextResponse.json(isValid.error.errors, { status: 400 });
  const userExists = await prisma.user.findUnique({
    where: { email: reqJSON.email },
  });
  if (userExists)
    return NextResponse.json(
      {
        message: "user already there",
      },
      { status: 409 }
    );
  const hashedPassword = await bcrypt.hash(reqJSON.password, 10);
  const userCreated = await prisma.user.create({
    data: { email: reqJSON.email, hashedPassword: hashedPassword },
  });
  return NextResponse.json(userCreated, { status: 201 });
}
