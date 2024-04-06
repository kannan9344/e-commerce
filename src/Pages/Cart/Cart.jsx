import React, { useContext } from "react";
import "../Cart/Cart.css";
import { ContentData } from "../../App";
import CartImage from "/src/assets/cart-image.png";
import CartList from "./CartList";
const Cart = () => {
  const { cart, setCart, total, setTotal } = useContext(ContentData);
  return (
    <div className="cart-container">
      {cart.length?"":<div className="empty-cart">
        <img src={CartImage} alt="" />
        <h3>Ohhh....Your Cart is Empty</h3>
        </div>}
      <div className="cart-row">
        {cart.map((cartitem) => (
          <CartList
            key={cartitem.id}
            cartitem={cartitem}
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
          />
        ))}
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
