import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return NextResponse.json(products);
}
