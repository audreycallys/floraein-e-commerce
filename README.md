# Floraein

**Make every moment bloom.**

Floraein is a flower e-commerce website built with React and TypeScript. It allows users to explore flower collections, view product details, and manage their shopping cart through a simple and elegant interface.

## Features

- **Home Page** – Explore featured flowers and discover more about Floraein.
- **Products Page** – Browse the available flower collections.
- **Product Detail** – View product information, including images, names, prices, and descriptions.
- **Shopping Cart** – Add products, update quantities, and remove items.
- **Cart Persistence** – Shopping cart data is saved using Local Storage.
- **Responsive Design** – Designed to provide a comfortable experience across different screen sizes.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- ShadCN UI
- React Router DOM
- Lucide React

## Getting Started

Follow these steps to run Floraein locally.

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project directory

```bash
cd floraein
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Open the local URL provided by Vite to view the application.

## Project Structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── context/
│   └── CartContext.tsx
├── data/
│   └── products.ts
├── pages/
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── ProductDetail.tsx
│   └── Cart.tsx
├── App.tsx
└── main.tsx
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build |

## About

Floraein is a personal e-commerce project created as part of a React development assignment. The project focuses on implementing page navigation, dynamic product routes, reusable components, and basic shopping cart functionality.

---

**Floraein — Make every moment bloom.** 