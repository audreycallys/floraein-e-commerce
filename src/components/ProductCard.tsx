import { ShoppingBag, Check, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import type { Product } from "../data/products"

type ProductCardProps = {
  product: Product
  isAdded: boolean
  onAddToCart: () => void
}

function ProductCard({ product, isAdded, onAddToCart }: ProductCardProps) {
  return (
    <div className="group min-w-0">
      {/* Product Image */}
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

      {/* Product Information */}
      <div className="mt-4">
        <p className="text-xs font-medium text-primary">{product.category}</p>

        <h3 className="mt-2 text-sm font-semibold text-foreground">
          {product.name}
        </h3>

        <p className="mt-2 text-sm font-semibold text-primary">
          Rp{product.price.toLocaleString("id-ID")}
        </p>

        {/* Product Actions */}
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={onAddToCart}
            disabled={isAdded}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-3 text-xs font-medium transition-colors ${
              isAdded
                ? "cursor-default bg-primary-light text-primary"
                : "bg-primary text-white hover:bg-primary-hover"
            }`}
          >
            {isAdded ? (
              <>
                <Check size={15} />
                Added
              </>
            ) : (
              <>
                <ShoppingBag size={15} />
                Add to Cart
              </>
            )}
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
