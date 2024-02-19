"use client";

import { CartItemWithProduct } from "@/lib/cart";
import { formatCurrency } from "@/lib/formatCurrency";
import Image from "next/image";
import Link from "next/link";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
}

function CartEntry({ cartItem: { product, quantity } }: CartEntryProps) {
  return (
    <>
      <div className="card card-side">
        <Image
          width={140}
          height={170}
          src={product.imageUrl}
          alt={product.name}
          className="object-cover rounded-lg"
        />
        <div className="card-body text-gray-600">
          <Link
            href={`/products/${product.id}`}
            className="text-md text-gray-900 font-bold"
          >
            {product.name}
          </Link>
          <div>Price: {formatCurrency(product.price)}</div>
          <form action="">
            <label htmlFor="">Quantity:</label>
            <select
              defaultValue={quantity}
              onChange={() => {}}
              className="ml-2 p-2 rounded-md"
            >
              {Array.from({ length: 99 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </form>
          <p>Total: {formatCurrency(quantity * product.price)}</p>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}

export default CartEntry;
