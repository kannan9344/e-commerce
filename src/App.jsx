import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { createContext, useState,Suspense, lazy } from "react";
import Footer from "./Pages/Footer/Footer";
import Data from "../src/Data.js";
const Home=lazy(()=>import("./Pages/Home/Home"));
const Shop=lazy(()=>import("./Pages/Shop/Shop"));
const Contact=lazy(()=>import("./Pages/Contact/Contact"));
const Cart=lazy(()=>import("./Pages/Cart/Cart"));
const Favorite=lazy(()=>import("./Pages/Favorite/Favorite"));
const ProductDetails=lazy(()=>import("./Pages/ProductDetails/ProductDetails"));
export const ContentData=createContext();
function App() {
  const [image,setImage]=useState("");
  const [cart,setCart]=useState([]);
  const [fav,setFav]=useState([]);
  const [total,setTotal]=useState(0);
  const [productdata,setproductData]=useState(Data);
  return (
    <div style={{ overflowX: "hidden" }}>
      <ContentData.Provider value={{image,setImage,cart,setCart,fav,setFav,productdata,setproductData,total,setTotal}}>
      <Navbar />
      <Suspense fallback={""}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Contact-us" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Product-details" element={<ProductDetails/>} />
      </Routes>
      </Suspense>
      <Footer />
      </ContentData.Provider>
    </div>
  );
}

export default App;
