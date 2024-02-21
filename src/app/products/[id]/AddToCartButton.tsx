"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import shoppingCartIcon from "../../../assets/shopping-cart.png";

interface AddToCartButtonProps {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
}

function AddToCartButton({
  productId,
  incrementProductQuantity,
}: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
          });
        }}
        className="btn btn-primary"
      >
        Add To Cart
        <Image
          src={shoppingCartIcon}
          alt="shopping-cart"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      </button>
      {isPending && <span className="loading loading-spinner loading-md" />}
      {!isPending && success && (
        <span className="text-success">Added to Cart</span>
      )}
    </div>
  );
}

export default AddToCartButton;
