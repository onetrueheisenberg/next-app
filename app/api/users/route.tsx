import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const response = await prisma.user.findMany();
  return NextResponse.json(response);
}

export async function POST(request: NextRequest) {
  const reqJSON = await request.json();
  const isValid = schema.safeParse(reqJSON);
  if (!isValid.success) {
    return NextResponse.json(isValid.error.errors, { status: 400 });
  }
  const doesUserExist = await prisma.user.findUnique({
    where: { email: reqJSON.email },
  });
  if (doesUserExist)
    return NextResponse.json(
      {
        message: "user already exists",
      },
      {
        status: 409,
      }
    );
  const dbCreate = await prisma.user.create({
    data: {
      name: reqJSON.name,
      email: reqJSON.email,
    },
  });
  return NextResponse.json(dbCreate, { status: 201 });
}
