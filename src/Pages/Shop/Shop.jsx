import { useContext, useState } from "react";
import "../Shop/Shop.css";
import ShopList from "./ShopList.jsx";
import { ContentData } from "../../App.jsx";
const Shop = () => {
  const { productdata, setproductData,setFav,fav,setData,setImage,cart,setCart} = useContext(ContentData);
  const [filtered,setFiltered]=useState(productdata);
  const filterCategory=(category)=>{
    if(category=="All"){
      setproductData(filtered);
    }
    else{
      let filterdata=filtered.filter((product)=>product.category==category || product.text==category);
      setproductData(filterdata);
    }
  }
  const filterPrice=(price_1,price_2)=>{
    let price=productdata.filter((product)=>{
      if(product.rate>=price_1 && product.rate<=price_2){
        return product;
      }
    });
    setproductData(price);
  };
  return (
    <div className="shop-container">
      <h2>SHOP</h2>
      <div className="shop-row">
        <div className="shop-col">
          <strong>Categories</strong>
          <div className="shop-category">
            <div className="category" onClick={()=>filterCategory("All")}>All</div>
            <div className="category" onClick={()=>filterCategory("Vegitables")}>Vegitables</div>
            <div className="category" onClick={()=>filterCategory("Fruits")}>Fruits</div>
            <div className="category" onClick={()=>filterCategory("DryFruits")}>DryFruits</div>
            <div className="category" onClick={()=>filterCategory("Meat")}>Meat</div>
            <div className="category" onClick={()=>filterCategory("Milk & Egg")}>Milk & Egg</div>
          </div>
          <strong>Prices</strong>
          <div className="prices">
            <div className="price" onClick={()=>filterPrice(10,50)}>₹10-₹50</div>
            <div className="price" onClick={()=>filterPrice(50,100)}>₹50-₹100</div>
            <div className="price" onClick={()=>filterPrice(100,150)}>₹100-₹150</div>
            <div className="price" onClick={()=>filterPrice(150,200)}>₹150-₹200</div>
            <div className="price" onClick={()=>filterPrice(200,250)}>₹200-₹250</div>
            <div className="price" onClick={()=>filterPrice(250,300)}>₹250-₹300</div>
            <div className="price" onClick={()=>filterPrice(300,350)}>₹300-₹350</div>
            <div className="price" onClick={()=>filterPrice(350,700)}>₹350-₹700</div>
          </div>
          <strong>Related Names</strong>
          <div className="names">
            <div className="name" onClick={()=>filterCategory("Broccoli")} >Broccoli</div>
            <div className="name" onClick={()=>filterCategory("Capsicum")} >Capsicum</div>
            <div className="name" onClick={()=>filterCategory("Apple")} >Apple</div>
            <div className="name" onClick={()=>filterCategory("Cherry")} >Cherry</div>
            <div className="name" onClick={()=>filterCategory("Cashew")} >Cashew</div>
            <div className="name" onClick={()=>filterCategory("Appricot")} >Appricot</div>
            <div className="name" onClick={()=>filterCategory("Lobster Meat")} >Lobster Meat</div>
            <div className="name" onClick={()=>filterCategory("Goat Meat")} >Goat Meat</div>
            <div className="name" onClick={()=>filterCategory("Egg")} >Egg</div>
            <div className="name" onClick={()=>filterCategory("Milk")} >Milk</div>
          </div>
        </div>
        <div className="shop-col">
          {productdata.map((product) => (
            <ShopList
              product={product}
              key={product.id}
              setData={setData}
              setImage={setImage}
              setCart={setCart}
              setFav={setFav}
              cart={cart}
              fav={fav}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
