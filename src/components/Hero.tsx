import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  products: Product[];
}
function Hero({ products }: HeroProps) {
  console.log(products);

  return (
    <div className="hero bg-base-100 rounded-lg mb-10">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          className="object-cover max-w-sm shadow-2xl rounded-lg"
          width={200}
          height={800}
          src="https://images.pexels.com/photos/18434225/pexels-photo-18434225/free-photo-of-blooming-potted-plant-and-a-wooden-bench-standing-by-a-stone-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          priority
        />
        <div>
          <h1 className="text-5xl font-bold">Thorned Heel Slicers</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link href={""} className="btn btn-primary">
            CHECK IT OUT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
