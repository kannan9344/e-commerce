import React, { useEffect } from "react";

const FeatureProList = ({ product,modalstate,setModalstate,setModalpro}) => {
  const value = Math.round(product.rate - product.discount);
  const addModalpro=()=>{
    setModalstate(!modalstate);
    setModalpro(product);
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
        <div className="icon">
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="icon">
          <i className="fa fa-shopping-cart"></i>
        </div>
        <div className="icon" onClick={addModalpro}>
          <i className="fa fa-eye"></i>
        </div>
      </div>
    </div>
  );
};

export default FeatureProList;
