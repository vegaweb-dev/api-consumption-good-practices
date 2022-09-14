
import React from 'react';
import {useState,useEffect} from 'react';
import { getProducts } from './services';


function App() {
  const[products,setProducts]=useState([]);
  
  useEffect(()=>{

    async function loadProducts(){
      const response = await getProducts();
      console.log(response.config);
      if(response.status===200){
        setProducts(response.data);
      }
      return response;
    }
    loadProducts();
  },[])













  return (
    <div >
      {!products ?'cargando': products.map(el=>el.id)}
    </div>
  );
}

export default App;
