import React from 'react'

const CartList = ({cartitem,cart, setCart}) => {
    const deleteCart=()=>{
        setCart(cart.filter((item)=>item.id !==cartitem.id));
    };
  return (
    <div className="cart-col" >
    <div className="image">
      <img src={cartitem.img} alt="" />
    </div>
    <div className="cart-text">
      <div className="cart-name">{cartitem.text}</div>
      <div className="delete-btn" onClick={deleteCart}>
        <i className='fa fa-trash'></i>
      </div>
      <div className="cart-amount">${cartitem.rate}</div>
    </div>
  </div>
  )
}

export default CartList;