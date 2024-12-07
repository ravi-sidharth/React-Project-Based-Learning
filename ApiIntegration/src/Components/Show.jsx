import React, { useEffect } from "react";
import axios from "../Utils/axios";
import { useState } from "react";

function Show() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios
      .get(`products`)
      .then((product) => setProducts(product.data))
      .catch((e) => console.log(e));
  };

  useEffect(()=> {
    getProducts()
  },[])

  return (
    <>
      <button onClick={getProducts} className="m-[5%] px-3 py-2 bg-green-600">
        Get Product Data
      </button>

      <ul className="ml-[5%]">
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id} className="bg-pink-400 rounded py-4 px-4 mt-4">
              {product.title}
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </>
  );
}

export default Show;
