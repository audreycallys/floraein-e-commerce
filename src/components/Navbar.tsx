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
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
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
      <nav className="mx-auto grid h-20 max-w-7xl grid-cols-2 items-center px-6 md:grid-cols-3">
        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-2 justify-self-start">
          <img
            src="/images/logo.png"
            alt="FLORAEIN Logo"
            className="h-9 w-9 object-contain"
          />

          <span className="text-sm font-bold tracking-[0.15em] text-foreground">
            FLORAEIN
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center justify-center gap-8 md:flex">
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

        {/* Right Actions */}
        <div className="flex items-center gap-4 justify-self-end">
          {/* Cart Button */}
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
