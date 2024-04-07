import React, { useContext } from "react";
import "../Cart/Cart.css";
import { ContentData } from "../../App";
import CartImage from "/src/assets/cart-image.png";
const Cart = () => {
  const { cart, setCart, total, setTotal } = useContext(ContentData);
  const deleteCart=(cartitem)=>{
    setCart(cart.filter((item)=>item.id !==cartitem.id));
};
  return (
    <div className="cart-container">
      {cart.length?"":<div className="empty-cart">
        <img src={CartImage} alt="" />
        <h3>Ohhh....Your Cart is Empty</h3>
        </div>}
      <div className="cart-row">
        {cart.map((cartitem) => {
          return(
            <div className="cart-col" key={cartitem.id} >
            <div className="image">
              <img src={cartitem.img} alt="" />
            </div>
            <div className="cart-text">
              <div className="cart-name">{cartitem.text}</div>
              <div className="delete-btn" onClick={()=>deleteCart(cartitem)}>
                <i className='fa fa-trash'></i>
              </div>
              <div className="cart-amount">${cartitem.rate}</div>
            </div>
          </div>
          )
        })}
      </div>
      <div className="total">
        <h3>SubTotal</h3>
        <div className="total-amount">₹{total}</div>
        <div className="total-btn">Make Payment</div>
      </div>
    </div>
  );
};

export default Cart;
