import { ShoppingBag, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

import type { Product } from "../data/products"
import { useCart } from "../context/CartContext"

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <div className="group min-w-0">
      <Link
        to={`/products/${product.id}`}
        className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-border bg-white p-5"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="mt-4">
        <p className="text-xs font-medium text-primary">{product.category}</p>

        <h3 className="mt-2 text-sm font-semibold text-foreground">
          {product.name}
        </h3>

        <p className="mt-2 text-sm font-semibold text-primary">
          Rp{product.price.toLocaleString("id-ID")}
        </p>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-3 py-3 text-xs font-medium text-white transition-colors hover:bg-primary-hover"
          >
            <ShoppingBag size={15} />
            Add to Cart
          </button>

          <Link
            to={`/products/${product.id}`}
            aria-label={`View details of ${product.name}`}
            className="flex items-center justify-center rounded-full border border-border px-4 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
