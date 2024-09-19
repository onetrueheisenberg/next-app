import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const response = await prisma.user.findUnique({
    where: { id: id },
  });
  if (!response) {
    return NextResponse.json({ error: "User not available" }, { status: 404 });
  }
  return NextResponse.json(response);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const reqJSON = await request.json();
  const isValid = schema.safeParse(reqJSON);
  if (!isValid.success) {
    return NextResponse.json(isValid.error.errors, { status: 404 });
  }
  const user = await prisma.user.findUnique({
    where: { id: id },
  });
  if (!user) {
    return NextResponse.json(
      { message: "User not available" },
      { status: 404 }
    );
  }
  if (!reqJSON.name) {
    return NextResponse.json(
      {
        error: "Name is mandatory",
      },
      { status: 400 }
    );
  }
  const updatedUser = await prisma.user.update({
    where: { id: id },
    data: {
      name: reqJSON.name,
      email: reqJSON.email,
    },
  });
  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (!id || parseInt(id) > 10) {
    return NextResponse.json({ error: "User not available" }, { status: 404 });
  }
  const user = await prisma.user.findUnique({
    where: { id: id },
  });
  if (!user) {
    return NextResponse.json(
      { message: "User not available" },
      { status: 404 }
    );
  }
  const deletedUser = await prisma.user.delete({
    where: { id: id },
  });
  return NextResponse.json(deletedUser, { status: 200 });
}
