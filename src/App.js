import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "./services";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await getProducts();
      console.log(response.config);
      if (response.status === 200) {
        setProducts(response.data);
      }
      return response;
    }
    loadProducts();
  }, []);

  return (
    <div>
      <ul>{!products ? "cargando" : products.map((el) => <li>{el.id}</li>)}</ul>
    </div>
  );
}

export default App;
