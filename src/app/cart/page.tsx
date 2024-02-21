import { getCart } from "@/lib/cart";
import { formatCurrency } from "@/lib/formatCurrency";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";

export const metadata = {
  title: "Your Cart - Flowmazon",
};

async function CartPage() {
  const cart = await getCart();

  return (
    <div className="">
      <h1 className="text-xl font-bold mb-5">Shopping Cart</h1>
      <div className="flex flex-col gap-2">
        {cart?.items.map((cartItem) => (
          <CartEntry
            key={cartItem.id}
            cartItem={cartItem}
            setProductQuantity={setProductQuantity}
          />
        ))}
      </div>
      {!cart?.items.length && (
        <p className="font-medium">Your cart is empty.</p>
      )}
      <div className="flex flex-col items-end sm:items-center">
        <p className="font-bold mt-4 mb-2">
          Total: {formatCurrency(cart?.subtotal || 0)}
        </p>
        <button className="btn btn-warning sm:w-[200px]">CHECKOUT</button>
      </div>
    </div>
  );
}

export default CartPage;
