import { formatCurrency } from "@/lib/formatCurrency";
import prisma from "@/lib/prismadb";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";

interface ProductPageProps {
  params: { id: string };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: `${product?.name} - Flowmazon`,
    description: product.description,
  };
}

async function ProductPage({ params: { id } }: ProductPageProps) {
  const product = await getProduct(id);

  return (
    <div className="hero rounded-lg mb-10">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          className="object-cover max-w-sm shadow-2xl rounded-lg"
          width={200}
          height={400}
          src={product.imageUrl}
          alt={product.name}
          priority
        />
        <div>
          <h1 className="text-4xl font-bold pb-6">{product.name}</h1>
          <div className="card-actions">
            <div className="badge">{formatCurrency(product.price)}</div>
          </div>
          <p className="py-6">{product.description}</p>
          <button className="btn btn-primary">
            Add To Cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
