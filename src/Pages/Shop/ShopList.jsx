import React from 'react'
import { Link } from 'react-router-dom';
const ShopList = ({product,setData,setImage,setFav,fav,setCart,cart}) => {
    const value = Math.round(product.rate - product.discount);
    const addData=()=>{
      setData(product);
      setImage(product.img);
    };
    const addCart=()=>{
      if(cart.includes(product)){
        return;
      }
      else{
        setCart([...cart,product]);
      }
    }
    const addFav=()=>{
      if(fav.includes(product)){
        return;
      }
      else{
        setFav([...fav,product]);
      }
    }
  return (
    <div className="product">
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
      <div className="icon" onClick={addFav} >
        <i className="fa-regular fa-heart"></i>
      </div>
      <div className="icon" onClick={addCart} >
        <i className="fa fa-shopping-cart"></i>
      </div>
      <Link to={"/Product-details"} onClick={addData}>
      <div className="icon"> 
      <i className="fa fa-eye"></i>
     </div>
      </Link>
    </div>
  </div>
  )
}

export default ShopList