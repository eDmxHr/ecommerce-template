import { CartItems } from "@/components/blocks/cart-items";
import { CartSummary } from "@/components/blocks/cart-summary";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="mb-12 text-6xl font-bold">Cart</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <CartItems />
          </div>

          {/* Cart Summary - Takes up 1 column and is sticky */}
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
