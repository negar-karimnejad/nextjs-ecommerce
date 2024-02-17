import Hero from "@/components/Hero";
import ProductsList from "@/components/ProductsList";
import prisma from "../lib/prismadb";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  console.log(products);

  return (
    <>
      <Hero products={products} />

      <ProductsList>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ProductsList>
    </>
  );
}
