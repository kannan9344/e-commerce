import "../Fproducts/FeaturePro.css";
import Fproducts from "../Fproducts/Fproducts.js";
import { ContentData } from "../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
const FeaturePro = () => {
  const {setImage,setCart,cart,setFav,fav}=useContext(ContentData);
  const Adddata=(product)=>{
    setImage(product.img);
  }
  const addtoCart=(product)=>{
    if(cart.includes(product)){
      return;
    }
    else{
      setCart([...cart,product]);
    }
  }
  const addtoFav=(product)=>{
    if(fav.includes(product)){
      return;
    }
    else{
      setFav([...fav,product]);
    }
  }
  return (
    <div className="feature-products">
      <h3>Feature Products</h3>
      <div className="row">
        {Fproducts.map((product) =>{
          return(
            <div className="col" key={product.id} >
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
                <div className="s-amount">$ {product.rate-product.discount}</div>
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
              <div className="icon" onClick={()=>addtoFav(product)} >
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="icon" onClick={()=>addtoCart(product)} >
                <i className="fa fa-shopping-cart"></i>
              </div>
              <Link to={"/Product-details"} state={product} >
              <div className="icon" onClick={()=>Adddata(product)}> 
              <i className="fa fa-eye"></i>
             </div>
              </Link>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default FeaturePro;
