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
  console.log(product);

  return (
    <Link href={`product/${""}`}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <Image
            className="object-cover h-48"
            src="https://images.pexels.com/photos/18434225/pexels-photo-18434225/free-photo-of-blooming-potted-plant-and-a-wooden-bench-standing-by-a-stone-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={800}
            height={400}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Thorned Heel Slicers</h2>
          {isNow && <div className="badge badge-secondary my-1">NEW</div>}
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            mollitia eaque quis perspiciatis nulla. Accusamus, repellendus hic
            eaque neque consequatur ea officia libero laudantium, quasi ad
            voluptas quaerat harum amet!
          </p>
          <div className="card-actions">
            <div className="badge mt-2">{formatCurrency(399)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
