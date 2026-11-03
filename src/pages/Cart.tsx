import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

import { useCart } from "../context/CartContext"

function Cart() {
  const { cartItems, subtotal, removeFromCart, updateQuantity, clearCart } =
    useCart()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleCheckout = () => {
    if (cartItems.length === 0) return

    const orderTotal = subtotal.toLocaleString("id-ID")

    alert(
      `Thank you for shopping at Floraein!\n\nYour order total is Rp${orderTotal}.\n\nWe hope our flowers make your day more beautiful!`
    )

    clearCart()
  }

  const handleDeleteAll = () => {
    const confirmed = window.confirm(
      "Are you sure you want to remove all items from your cart?"
    )

    if (confirmed) {
      clearCart()
    }
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Your Selection
          </p>

          <h1 className="mt-3 font-heading text-5xl font-medium text-foreground">
            Shopping Cart
          </h1>

          <p className="mt-3 text-sm text-muted">
            Review your selected flowers before checkout.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-border bg-[#FAF7F8] px-6 text-center">
            <ShoppingBag size={40} strokeWidth={1.3} className="text-primary" />

            <h2 className="mt-5 font-heading text-3xl text-foreground">
              Your cart is empty
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
              It looks like you haven't added any flowers to your cart yet.
            </p>

            <Link
              to="/products"
              className="mt-7 inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Explore Flowers
            </Link>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            {/* Cart Items */}
            <section>
              <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                <h2 className="text-sm font-semibold text-foreground">
                  Cart Items ({cartItems.length})
                </h2>

                <button
                  type="button"
                  onClick={handleDeleteAll}
                  className="flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-primary"
                >
                  <Trash2 size={14} />
                  Delete All
                </button>
              </div>

              <div className="flex flex-col">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-5 border-b border-border py-6"
                  >
                    <Link
                      to={`/products/${item.id}`}
                      className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-[#FAF7F8] p-3 sm:h-32 sm:w-32"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain"
                      />
                    </Link>

                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div>
                        <p className="text-xs text-primary">{item.category}</p>

                        <h3 className="mt-2 text-sm font-semibold text-foreground">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-primary">
                          Rp{item.price.toLocaleString("id-ID")}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-3 rounded-full border border-border px-3 py-1.5">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                            className="text-muted transition-colors hover:text-primary disabled:opacity-30"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="min-w-4 text-center text-xs font-medium">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                            className="text-muted transition-colors hover:text-primary"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="text-muted transition-colors hover:text-primary"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Order Summary */}
            <aside className="h-fit rounded-2xl border border-border bg-white p-6 sm:p-8 lg:sticky lg:top-28">
              <h2 className="font-heading text-3xl font-medium text-foreground">
                Order Summary
              </h2>

              <div className="mt-8 space-y-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-medium text-foreground">
                    Rp{subtotal.toLocaleString("id-ID")}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Shipping</span>
                  <span className="font-medium text-foreground">Free</span>
                </div>
              </div>

              <div className="mt-7 border-t border-border pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">
                    Total
                  </span>

                  <span className="text-xl font-semibold text-[#AC254F]">
                    Rp{subtotal.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                className="mt-8 w-full rounded-full bg-[#AC254F] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#8F1D41]"
              >
                Checkout
              </button>

              <Link
                to="/products"
                className="mt-5 block text-center text-sm font-medium text-[#AC254F] transition-colors hover:text-[#8F1D41]"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  )
}

export default Cart
