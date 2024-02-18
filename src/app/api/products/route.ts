import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        id: "asc",
      },
    });

    console.log("😎", products);

    return NextResponse.json(products);
  } catch (error) {
    console.log("sth wrong🥱😫😪", error);

    return NextResponse.json({ error: `sth wrong🥱😫😪${error}` });
  }
}
