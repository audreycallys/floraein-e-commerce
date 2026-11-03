export type Product = {
  id: number
  name: string
  price: number
  image: string
  description: string
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "White Lily Elegance",
    price: 185000,
    image: "/images/products/product-1.png",
    description:
      "An elegant arrangement of white lilies, perfect for expressing sincerity and appreciation.",
    category: "Elegant",
  },
  {
    id: 2,
    name: "Blushing Romance",
    price: 165000,
    image: "/images/products/product-2.png",
    description:
      "A soft pink bouquet that brings warmth and romance to special moments.",
    category: "Romantic",
  },
  {
    id: 3,
    name: "Golden Sunshine",
    price: 175000,
    image: "/images/products/product-3.png",
    description:
      "A cheerful bouquet inspired by sunshine, bringing happiness to every occasion.",
    category: "Cheerful",
  },
  {
    id: 4,
    name: "Crimson Love",
    price: 195000,
    image: "/images/products/product-4.png",
    description:
      "A deep red floral arrangement that represents love, passion, and affection.",
    category: "Romantic",
  },
  {
    id: 5,
    name: "Pink Whisper",
    price: 155000,
    image: "/images/products/product-5.png",
    description:
      "A delicate pink bouquet with a soft appearance, suitable for thoughtful gifts.",
    category: "Soft",
  },
  {
    id: 6,
    name: "Blue Serenity",
    price: 210000,
    image: "/images/products/product-6.png",
    description:
      "A calming blue floral arrangement that creates a peaceful and graceful impression.",
    category: "Elegant",
  },
  {
    id: 7,
    name: "Lavender Dreams",
    price: 180000,
    image: "/images/products/product-7.png",
    description:
      "A lovely lavender bouquet that brings a gentle and relaxing atmosphere.",
    category: "Soft",
  },
  {
    id: 8,
    name: "Sunny Delight",
    price: 160000,
    image: "/images/products/product-8.png",
    description:
      "A bright and cheerful flower arrangement for celebrating everyday happiness.",
    category: "Cheerful",
  },
]
