import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import Favorite from "./Pages/Favorite/Favorite";
import { createContext, useState } from "react";
import Footer from "./Pages/Footer/Footer";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Data from "../src/Data.js";

export const ContentData=createContext();
function App() {
  const [data,setData]=useState("");
  const [image,setImage]=useState("");
  const [cart,setCart]=useState([]);
  const [fav,setFav]=useState([]);
  const [total,setTotal]=useState(0);
  const [productdata,setproductData]=useState(Data);
  return (
    <div style={{ overflowX: "hidden" }}>
      <ContentData.Provider value={{data,setData,image,setImage,cart,setCart,fav,setFav,productdata,setproductData,total,setTotal}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Contact-us" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Product-details" element={<ProductDetails/>} />
      </Routes>
      <Footer />
      </ContentData.Provider>
     
    </div>
  );
}

export default App;
