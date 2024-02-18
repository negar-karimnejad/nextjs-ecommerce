import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ProductsList from "@/components/ProductsList";
import prisma from "@/lib/prismadb";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <>
      <Hero products={products} />
      <ProductsList>
        {products.slice(1).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ProductsList>
    </>
  );
}
