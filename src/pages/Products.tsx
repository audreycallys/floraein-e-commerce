import { products } from "../data/products"
import ProductCard from "../components/ProductCard"
import { useEffect } from "react"

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Our Collection
          </p>

          <h1 className="mt-3 font-heading text-5xl font-medium text-foreground">
            All Flowers
          </h1>

          <p className="mt-3 text-sm text-muted">
            Find the perfect flowers for every special moment.
          </p>
        </div>

        {/* Product List */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isAdded={false}
              onAddToCart={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
