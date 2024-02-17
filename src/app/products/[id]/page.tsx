import { formatCurrency } from "@/lib/formatCurrency";
import Image from "next/image";

function ProductPage() {
  return (
    <div className="hero rounded-lg mb-10">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          className="object-cover max-w-sm shadow-2xl rounded-lg"
          width={200}
          height={400}
          src="https://images.pexels.com/photos/18434225/pexels-photo-18434225/free-photo-of-blooming-potted-plant-and-a-wooden-bench-standing-by-a-stone-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          priority
        />
        <div>
          <h1 className="text-4xl font-bold pb-6">Thorned Heel Slicers</h1>
          <div className="card-actions">
            <div className="badge">{formatCurrency(399)}</div>
          </div>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
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
