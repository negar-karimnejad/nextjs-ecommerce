import Hero from "@/components/Hero";
import ProductsList from "@/components/ProductsList";
import prisma from "../lib/prismadb";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  console.log(products);

  return (
    <>
      <Hero />
      <ProductsList />
    </>
  );
}
