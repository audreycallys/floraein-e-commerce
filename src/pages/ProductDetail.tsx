import { ArrowLeft, Heart, ShoppingBag, Truck, ShieldCheck } from "lucide-react"
import { Button } from "../components/ui/button"
import { products } from "../data/products"
import { Link, useParams } from "react-router-dom"

import { useEffect } from "react"

const ProductDetail = () => {
  const { id } = useParams()

  const product = products.find((item) => item.id === Number(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6">
        <p className="font-heading text-4xl text-primary">Product Not Found</p>

        <p className="mt-3 text-sm text-muted">
          Sorry, the flower you are looking for is unavailable.
        </p>

        <Button
          asChild
          className="mt-6 rounded-full bg-primary hover:bg-primary-hover"
        >
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white px-6 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Collection
          </Link>
        </div>

        {/* Product Detail */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Product Image */}
          <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-border bg-[#FAF7F8] p-8 sm:p-14">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              {product.category} Collection
            </p>

            <h1 className="mt-5 font-heading text-5xl leading-tight font-medium text-foreground sm:text-6xl">
              {product.name}
            </h1>

            <p className="mt-5 text-2xl font-semibold text-primary">
              Rp{product.price.toLocaleString("id-ID")}
            </p>

            <div className="my-8 border-t border-border" />

            <div>
              <h2 className="text-sm font-semibold text-foreground">
                Product Description
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-8 text-muted">
                {product.description}
              </p>
            </div>

            {/* Product Actions */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Button className="h-12 flex-1 rounded-full bg-primary text-sm font-medium text-white hover:bg-primary-hover">
                <ShoppingBag size={17} />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
