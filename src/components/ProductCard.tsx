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
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            className="object-cover h-48"
            src={product.imageUrl}
            alt=""
            width={800}
            height={400}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          {isNow && <div className="badge badge-secondary my-1">NEW</div>}
          <p>{product.description}</p>
          <div className="card-actions">
            <div className="badge mt-2">{formatCurrency(product.price)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
