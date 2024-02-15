"use server";

import { redirect } from "next/navigation";
import prisma from "./lib/prismadb";

export async function addProduct(formData: FormData) {
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price")) || 0;

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  try {
    // const existedProduct = await prisma.product.findUnique({
    //   where: { name: name },
    // });

    // if (existedProduct) {
    //   //
    // }
    const product = await prisma.product.create({
      data: { name, description, imageUrl, price },
    });
  } catch (error: any) {
    console.log(error.message);
  }
}
