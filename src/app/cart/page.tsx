import { getCart } from "@/lib/cart";
import { formatCurrency } from "@/lib/formatCurrency";
import Image from "next/image";
import CartEntry from "./CartEntry";

export const metadata = {
  title: "Your Cart - Flowmazon",
};

async function CartPage() {
  const cart = await getCart();

  return (
    <div className="">
      <h1 className="text-xl font-bold mb-5">Shopping Cart</h1>
      {/* cart products */}
      <div className="flex flex-col gap-2">
        {cart?.items.map((cartItem) => (
          <CartEntry key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className="mx-auto text-center">
        <p className="font-bold mt-4 mb-2">
          Total: {formatCurrency(cart?.subtotal || 0)}
        </p>
        <button className="btn btn-warning px-5">CHECKOUT</button>
      </div>
    </div>
  );
}

export default CartPage;
