import React from "react";
import { Link } from "react-router-dom";

const FeatureProList = ({ product,setImage,setData,setCart,cart,setFav,fav}) => {
  const value = Math.round(product.rate - product.discount);
  const Adddata=()=>{
    setData(product);
    setImage(product.img);
  }
  const addtoCart=()=>{
    if(cart.includes(product)){
      return;
    }
    else{
      setCart([...cart,product]);
    }
  }
  const addtoFav=()=>{
    if(fav.includes(product)){
      return;
    }
    else{
      setFav([...fav,product]);
    }
  }
  return (
    <div className="col">
      <div className="image">
        <img src={product.img} alt={product.text} />
      </div>
      <div className="product-content">
        <div className="names">
          <div className="name">{product.text}</div>
          <div className="kg">{product.gram} g</div>
        </div>
        <div className="two" style={{display:"flex",justifyContent:"space-between"}}>
        <div className="amounts">
          <div className="f-amount">$ {product.rate}</div>
          <div className="s-amount">$ {value}</div>
        </div>
        <div className="stars">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        </div>
        <div className="discount">{product.discount}%</div>
      </div>
      <div className="icons">
        <div className="icon" onClick={addtoFav} >
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="icon" onClick={addtoCart} >
          <i className="fa fa-shopping-cart"></i>
        </div>
        <Link to={"/Product-details"}>
        <div className="icon" onClick={Adddata}> 
        <i className="fa fa-eye"></i>
       </div>
        </Link>
      </div>
    </div>
  );
};

export default FeatureProList;
