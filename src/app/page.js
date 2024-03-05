"use client"
import { Navbar } from "@/components/Navbar";
import  Product  from "@/components/Product";
import { ProductsProvider } from "@/contexts/ProductContext";
import { CartProvider } from "@/contexts/CartContext";
// import { createContext } from "react";




export default function Home() {

  
  return (
    <ProductsProvider>
      <CartProvider>
      <div className="overflow-hidden relative max-width">
        <Navbar />
        <Product />
        </div>
        </CartProvider>
        </ProductsProvider>
  );
}
