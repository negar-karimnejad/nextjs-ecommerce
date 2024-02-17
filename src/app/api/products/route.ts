import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return NextResponse.json(products);
}
