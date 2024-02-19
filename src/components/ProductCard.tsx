import { formatCurrency } from "@/lib/formatCurrency";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  // Calculate if the product created less than 7 days it has the label "NEW"
  const isNow =
    Date.now() - new Date("product.createdAt").getTime() <
    1000 * 60 * 60 * 24 * 7;

  return (
    <Link href={`products/${product.id}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <Image
            className="object-contain"
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={400}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name.slice(0, 30)}...</h2>
          {isNow && <div className="badge badge-secondary my-1">NEW</div>}
          <p className="line-clamp-4">{product.description}</p>
          <div className="card-actions">
            <div className="badge mt-2">{formatCurrency(product.price)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
