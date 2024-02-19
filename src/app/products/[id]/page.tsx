import { formatCurrency } from "@/lib/formatCurrency";
import prisma from "@/lib/prismadb";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "./actions";

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
          className="object-contain shadow-2xl rounded-lg"
          width={300}
          height={300}
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

          <AddToCartButton
            productId={product.id}
            incrementProductQuantity={incrementProductQuantity}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
