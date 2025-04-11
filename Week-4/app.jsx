// App.jsx (React Frontend)
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const products = [
  { id: 1, name: "Product A", price: "$25", image: "/images/a.jpg", description: "Details about Product A" },
  { id: 2, name: "Product B", price: "$40", image: "/images/b.jpg", description: "Details about Product B" },
  { id: 3, name: "Product C", price: "$30", image: "/images/c.jpg", description: "Details about Product C" },
];

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white flex justify-between">
    <Link to="/" className="font-bold text-lg">Product Store</Link>
    <div>
      <Link to="/" className="mx-2">Home</Link>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="text-center p-10 bg-blue-100">
    <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
    <p className="mt-2 text-lg">Explore our best products at affordable prices</p>
  </section>
);

const ProductList = () => (
  <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
    {products.map(product => (
      <div key={product.id} className="border p-4 rounded shadow">
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
        <h2 className="mt-2 text-xl font-bold">{product.name}</h2>
        <p>{product.price}</p>
        <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">View Details</Link>
      </div>
    ))}
  </section>
);

const ProductDetails = ({ id }) => {
  const product = products.find(p => p.id === parseInt(id));
  if (!product) return <p>Product not found</p>;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} className="w-full h-64 object-cover my-4" />
      <p className="mb-2">{product.description}</p>
      <p className="text-lg font-semibold">{product.price}</p>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 text-center">
    <p>&copy; 2025 Product Store</p>
    <div className="mt-2">
      <a href="#" className="mx-2">Facebook</a>
      <a href="#" className="mx-2">Twitter</a>
    </div>
  </footer>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <HeroSection />
          <ProductList />
        </>} />
        <Route path="/product/:id" element={<ProductDetailWrapper />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const ProductDetailWrapper = () => {
  const id = window.location.pathname.split("/").pop();
  return <ProductDetails id={id} />;
};

export default App;
