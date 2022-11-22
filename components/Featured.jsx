import React from "react";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";

const fetchProducts = () =>
  fetch("https://api.escuelajs.co/api/v1/products").then((res) => res.json());

function Featured() {
  const { data, isLoading, error, isError } = useQuery(
    "products",
    fetchProducts
  );
  const products = data;
  if (isLoading) {
    return (
      <div className="h-[200px] flex flex-col gap-2 items-center justify-center">
        <div className="loader"></div>
        <p className="text-center text-slate-900 font-bold">Getting Products</p>
      </div>
    );
  }
  if (isError) {
    console.log(error);
    return (
      <div>
        <p>Error</p>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-gray-900 text-2xl font-bold" contentEditable>Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            products.map((product, index) => {
                if (index >= 9) return;

                return (
                    <ProductCard key={product.id} product={product} />
                )
            })
        }
      </div>
    </div>
  );
}

export default Featured;
