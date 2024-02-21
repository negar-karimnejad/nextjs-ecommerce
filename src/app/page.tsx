import Hero from "@/components/Hero";
import PaginationBar from "@/components/PaginationBar";
import ProductCard from "@/components/ProductCard";
import ProductsList from "@/components/ProductsList";
import { prisma } from "@/lib/prismadb";

interface HomeProps {
  searchParams: { page: string };
}

export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);
  const pageSize = 6;
  const heroItemCount = 1;
  const totalItemCount = await prisma.product.count();
  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize);
  const products = await prisma.product.findMany({
    orderBy: {
      id: "asc",
    },
    skip:
      (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  });

  return (
    <div className="flex flex-col items-center">
      {currentPage === 1 && <Hero products={products} />}
      <ProductsList>
        {(currentPage === 1 ? products.slice(1) : products).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ProductsList>
      {totalPages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
}
