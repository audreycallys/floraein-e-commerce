import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, ShoppingBag, X } from "lucide-react"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Sementara gunakan angka 0.
  // Nanti akan dihubungkan dengan data keranjang.
  const cartCount = 0

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" }
  ]

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm transition-colors duration-200
    after:absolute after:-bottom-2 after:left-0 after:h-[2px]
    after:w-full after:origin-left after:transition-transform
    after:duration-200
    ${
      isActive
        ? "font-semibold text-primary after:scale-x-100 after:bg-primary"
        : "text-foreground after:scale-x-0 after:bg-primary hover:text-primary hover:after:scale-x-100"
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Brand - Left */}
        <NavLink to="/" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="FLORAEIN Logo"
            className="h-9 w-9 object-contain"
          />

          <span className="text-sm font-bold tracking-[0.15em] text-foreground">
            FLORAEIN
          </span>
        </NavLink>

        {/* Navigation - Right */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={linkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden h-6 w-px bg-border md:block" />

          {/* Cart */}
          <NavLink
            to="/cart"
            aria-label={`Shopping cart with ${cartCount} items`}
            className={({ isActive }) =>
              `relative flex items-center gap-2 transition-colors ${
                isActive ? "text-primary" : "text-foreground hover:text-primary"
              }`
            }
          >
            <ShoppingBag size={20} strokeWidth={1.7} />

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-primary px-1.5 text-xs text-white">
              {cartCount}
            </span>
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-surface md:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-white px-6 py-5 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setIsMenuOpen(false)}
                className={linkClass}
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className={linkClass}
            >
              Cart
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
