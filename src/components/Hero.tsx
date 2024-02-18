import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  products: Product[];
}
function Hero({ products }: HeroProps) {
  return (
    <div className="hero bg-base-100 rounded-lg mb-10">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          className="object-cover max-w-sm shadow-2xl rounded-lg"
          width={200}
          height={800}
          src={products[0]?.imageUrl}
          alt=""
          priority
        />
        <div>
          <h1 className="text-5xl font-bold">{products[0]?.name}</h1>
          <p className="py-6">{products[0]?.description}</p>
          <Link
            href={`/products/${products[0]?.id}`}
            className="btn btn-primary"
          >
            CHECK IT OUT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
