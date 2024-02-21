import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/prismadb";
import { Metadata } from "next";

interface SearchPageProps {
  searchParams: { query: string };
}

export const generateMetadata = ({
  searchParams: { query },
}: SearchPageProps): Metadata => {
  return {
    title: `Search: ${query} - Flowmazon`,
  };
};

async function SearchPage({ searchParams: { query } }: SearchPageProps) {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
    orderBy: { id: "asc" },
  });

  if (products.length === 0) {
    return <div className="text-center">No Products Found</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default SearchPage;
