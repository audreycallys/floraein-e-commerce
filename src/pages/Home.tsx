import { useEffect } from "react"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"

import ProductCard from "../components/ProductCard"
import { products } from "../data/products"

function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const sectionId = location.state?.scrollTo

    if (sectionId) {
      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        })
      })

      navigate("/", { replace: true, state: null })
    }
  }, [location.state, navigate])

  return (
    <main>
      {/* Hero Section */}
      <section
        id="home"
        className="flex min-h-[calc(100svh-80px)] w-full flex-col overflow-hidden bg-white"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-14 text-center sm:pt-16">
          <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            A Floral Studio for Every Season
          </p>

          <h1 className="font-heading text-5xl leading-[1.05] font-medium text-foreground sm:text-7xl lg:text-[86px] lg:leading-[0.95]">
            Flowers for
            <br />
            <span className="text-primary italic">every moment.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-muted">
            Thoughtfully arranged blooms for the moments that matter most.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Explore Flowers
              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              to="/"
              state={{ scrollTo: "about" }}
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-white px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              About Us
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Flower Showcase */}
        <div className="relative mt-7 pt-5 pb-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 h-[260px] w-[150%] -translate-x-1/2 translate-y-[150px] rounded-t-[50%] bg-plum sm:h-[360px] sm:w-[125%] sm:translate-y-[190px] lg:h-[520px] lg:w-[115%] lg:translate-y-[310px]"
          />

          <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 sm:grid-cols-4 lg:flex lg:translate-y-8 lg:justify-center lg:gap-9">
            {[
              { image: "flower-1.png", name: "Colorful Blooms" },
              { image: "flower-2.png", name: "Soft Petals" },
              { image: "flower-4.png", name: "Pastel Blue" },
              { image: "flower-5.png", name: "Spring Garden" },
            ].map((flower) => (
              <div
                key={flower.image}
                className="group relative min-w-0 overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:w-[210px] lg:shrink-0"
              >
                <img
                  src={`/images/flowers/${flower.image}`}
                  alt={flower.name}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 pt-12 pb-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium text-white">
                    {flower.name}
                  </p>
                  <p className="mt-1 text-xs text-white/80">Our Collection</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="flowers" className="bg-[#FAF7F8] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                01 / Our Collection
              </p>

              <h2 className="mt-4 font-heading text-4xl font-medium text-foreground sm:text-5xl">
                Featured Flowers
              </h2>

              <p className="mt-3 text-sm text-muted">
                A little beauty for every special moment.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
            >
              View All Flowers
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isAdded={false}
                onAddToCart={() => {}}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Floraein */}
      <section className="bg-white px-6 py-28 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-24">
          {/* Section Heading */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              02 / The Floraein Difference
            </p>

            <h2 className="mt-6 max-w-lg font-heading text-5xl leading-[1.05] font-medium text-foreground sm:text-6xl lg:text-7xl">
              A little more
              <br />
              <span className="text-primary italic">meaning</span> in every
              <br />
              bloom.
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              We believe every flower has a story to tell. That is why we put
              thought and care into every arrangement we create.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col">
            <div className="border-t border-border py-7">
              <div className="flex gap-6 sm:gap-10">
                <span className="font-heading text-xl text-primary italic">
                  01
                </span>

                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    Thoughtfully Selected
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-7 text-muted">
                    Every flower is carefully chosen to bring beauty and
                    freshness to your special moments.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border py-7">
              <div className="flex gap-6 sm:gap-10">
                <span className="font-heading text-xl text-primary italic">
                  02
                </span>

                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    Arranged with Care
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-7 text-muted">
                    Each bouquet is arranged with attention to detail, creating
                    something beautiful and meaningful.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-y border-border py-7">
              <div className="flex gap-6 sm:gap-10">
                <span className="font-heading text-xl text-primary italic">
                  03
                </span>

                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    Made for Every Moment
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-7 text-muted">
                    From thoughtful gifts to meaningful celebrations, we help
                    make every occasion a little more special.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="bg-[#FAF7F8] px-6 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <img
              src="/images/about-flower.jpg"
              alt="Floraein Flower Arrangement"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />

            <div className="absolute -right-3 -bottom-5 rounded-xl bg-white px-6 py-5 shadow-sm sm:-right-6">
              <p className="font-heading text-2xl text-primary italic">
                Made with love.
              </p>
              <p className="mt-1 text-xs text-muted">
                Every bloom tells a story.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              03 / Our Story
            </p>

            <h2 className="mt-6 font-heading text-5xl leading-[1.05] font-medium text-foreground sm:text-6xl lg:text-7xl">
              More than
              <br />
              just <span className="text-primary italic">flowers.</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-muted">
              At <span className="font-semibold text-primary">FLORAEIN</span>,
              we believe flowers are more than beautiful gifts. They are a way
              to express feelings, create memories, and make ordinary moments
              feel special.
            </p>

            <p className="mt-5 max-w-lg text-sm leading-8 text-muted">
              Every arrangement is thoughtfully created to bring a little more
              beauty and meaning into someone's day.
            </p>

            <p className="mt-10 font-heading text-2xl text-primary italic">
              Make every moment bloom.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
