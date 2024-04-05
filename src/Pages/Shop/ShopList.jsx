import React from 'react'
import { Link } from 'react-router-dom';
const ShopList = ({productdata,setData,setImage,setFav,setCart}) => {
    const value = Math.round(productdata.rate - productdata.discount);
    const addData=()=>{
      setData(productdata);
      setImage(productdata.img);
    };
  return (
    <div className="product">
    <div className="image">
      <img src={productdata.img} alt={productdata.text} />
    </div>
    <div className="product-content">
      <div className="names">
        <div className="name">{productdata.text}</div>
        <div className="kg">{productdata.gram} g</div>
      </div>
      <div className="two" style={{display:"flex",justifyContent:"space-between"}}>
      <div className="amounts">
        <div className="f-amount">$ {productdata.rate}</div>
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
      <div className="discount">{productdata.discount}%</div>
    </div>
    <div className="icons">
      <div className="icon" onClick={()=>setFav(productdata)} >
        <i className="fa-regular fa-heart"></i>
      </div>
      <div className="icon" onClick={()=>setCart(productdata)} >
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