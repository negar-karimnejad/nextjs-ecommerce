"use client";

import { CartItemWithProduct } from "@/lib/cart";
import { formatCurrency } from "@/lib/formatCurrency";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
}

function CartEntry({
  cartItem: { product, quantity },
  setProductQuantity,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();

  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <>
      <div className="card card-side">
        <Image
          width={140}
          height={170}
          src={product.imageUrl}
          alt={product.name}
          className="object-contain rounded-lg"
        />
        <div className="card-body text-gray-600">
          <Link
            href={`/products/${product.id}`}
            className="text-md text-gray-900 font-bold"
          >
            {product.name}
          </Link>
          <div>Price: {formatCurrency(product.price)}</div>
          <div className="my-1 flex items-center gap-2">
            Quantity:
            <select
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity);
                });
              }}
              className="select select-bordered w-full max-w-[80px]"
            >
              <option value={0}>0 (Remove)</option>
              {quantityOptions}
            </select>
          </div>
          <div className="flex items-center gap-2 w-fit">
            <p>Total: {formatCurrency(quantity * product.price)}</p>
            {isPending && (
              <span className="loading loading-spinner loading-md" />
            )}
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}

export default CartEntry;
