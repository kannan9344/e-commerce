import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import Favorite from "./Pages/Favorite/Favorite";
import { createContext, useState } from "react";
import Footer from "./Pages/Footer/Footer";

export const ContentData=createContext();
function App() {
  const [modalstate,setModalstate]=useState(false);
  return (
    <div style={{ overflowX: "hidden" }}>
      <ContentData.Provider value={{modalstate,setModalstate}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About-us" element={<About/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Contact-us" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Favorite" element={<Favorite />} />
      </Routes>
      <Footer />
      </ContentData.Provider>
     
    </div>
  );
}

export default App;
