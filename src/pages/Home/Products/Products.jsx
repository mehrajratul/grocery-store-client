import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [prducts, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://grocery-shop-server-7q32iukm6-mehraj-hossain-ratuls-projects.vercel.app/products"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-col-3 md:grid-cols-3 gap-8 my-16">
      {prducts.length > 0 ? (
        prducts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))
      ) : (
        <div className="flex justify-around">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default Products;
