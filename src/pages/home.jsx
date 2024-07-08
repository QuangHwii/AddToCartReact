import React from "react";
import { products } from "../products";
import ProductCart from "../components/productCart";
const Home = () => {
  console.log(products);
  return (
    <div>
      <h1 className="text-3xl my-5">List Products</h1>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {products.map((products, key) => {
         return <ProductCart key={key} data={products} />;
        })}
      </div>
    </div>
  );
};

export default Home;
