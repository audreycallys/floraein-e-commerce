import { ArrowUpRight } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"

function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } })
      return
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-6">
        {/* Footer Main */}
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-start">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="FLORAEIN Logo"
                className="h-9 w-9 object-contain"
              />

              <h2 className="text-sm font-bold tracking-[0.15em] text-foreground">
                FLORAEIN
              </h2>
            </Link>

            <p className="mt-3 text-sm text-muted">Make every moment bloom.</p>

            <p className="mt-2 max-w-xs text-xs leading-6 text-muted">
              Thoughtfully arranged flowers to make your special moments more
              meaningful.
            </p>
          </div>

          {/* Footer Navigation */}
          <div className="sm:pt-2">
            <p className="mb-5 text-xs font-semibold tracking-[0.15em] text-primary uppercase">
              Explore Floraein
            </p>

            <nav className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <button
                type="button"
                onClick={() => scrollToSection("home")}
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("flowers")}
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                Products
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                About Us
              </button>

              <Link
                to="/cart"
                className="inline-flex items-center gap-1 text-sm text-foreground transition-colors hover:text-primary"
              >
                My Cart
                <ArrowUpRight size={14} />
              </Link>
            </nav>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="mt-12 border-t border-border pt-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-muted">
              © 2026 FLORAEIN. All rights reserved.
            </p>

            <p className="font-heading text-lg text-primary italic">
              Made with love, for every moment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
