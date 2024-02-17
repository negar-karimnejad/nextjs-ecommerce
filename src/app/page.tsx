import { formatCurrency } from "@/lib/formatCurrency";
import Image from "next/image";
import Link from "next/link";
import prisma from "../lib/prismadb";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  // Calculate if the product created less than 7 days it has the label "NEW"
  const isNow =
    Date.now() - new Date("product.createdAt").getTime() <
    1000 * 60 * 60 * 24 * 7;

  return (
    <>
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
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link href={""} className="btn btn-primary">
              CHECK IT OUT
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {products?.map((product) => (
          <Link href={`product/${""}`} key={product.id}>
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Numquam mollitia eaque quis perspiciatis nulla. Accusamus,
                  repellendus hic eaque neque consequatur ea officia libero
                  laudantium, quasi ad voluptas quaerat harum amet!
                </p>
                <div className="card-actions">
                  <div className="badge mt-2">{formatCurrency(399)}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
