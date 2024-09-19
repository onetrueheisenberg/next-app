import { NextRequest, NextResponse } from "next/server";
// import schema from "./schema";
// import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  // const products = prisma.product.findMany();
  // return NextResponse.json(products, { status: 200 });
}

export async function POST(request: NextRequest) {
  // const reqBody = await request.json();
  // const validation = schema.safeParse(reqBody);
  // if (!validation.success) {
  //   return NextResponse.json(validation.error.errors, { status: 400 });
  // }
  // const newProduct = await prisma.product.create({
  //   data: {
  //     name: reqBody.name,
  //     price: reqBody.price,
  //   },
  // });
  // return NextResponse.json(newProduct, { status: 201 });
}
