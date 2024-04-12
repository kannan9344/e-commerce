import { useContext } from 'react'
import "../ProductDetails/ProductDetails.css";
import { ContentData } from "../../App";
import {useLocation} from 'react-router-dom'
const ProductDetails = () => {
    const {image,setImage,cart,setCart}=useContext(ContentData);
    const {state}=useLocation();
    const addImage=(img)=>{
        setImage(img);
    }
    const addTocart=()=>{
       if(cart.includes(state)){
        return;
       }
       else{
        setCart([...cart,state]);
       }
    }
  return (
    <div className='product-container'>
        <div className="row">
            <div className="col">
                <div className="left-col">
                    <div className={state.images?.img1==image?"col-1 active":"col-1"} onClick={()=>addImage(state.images?.img1)}>
                        <img src={state.images?.img1}/>
                    </div>
                    <div className={state.images?.img2==image?"col-1 active":"col-1"} onClick={()=>addImage(state.images?.img2)}>
                        <img src={state.images?.img2}/>
                    </div>
                    <div className={state.images?.img3==image?"col-1 active":"col-1"} onClick={()=>addImage(state.images?.img3)}>
                        <img src={state.images?.img3}/>
                    </div>
                    <div className={state.images?.img4==image?"col-1 active":"col-1"} onClick={()=>addImage(state.images?.img4)}>
                        <img src={state.images?.img4} />
                    </div>
                    <div className={state.images?.img5==image?"col-1 active":"col-1"} onClick={()=>addImage(state.images?.img5)}>
                        <img src={state.images?.img5} />
                    </div>
                </div>
                <div className="right-col">
                    <img src={image?image:state.img}/>
                </div>
            </div>
            <div className="col">
                <div className="pro-name">{state?.text?state?.text:"No Name Available"}</div>
                <div className="pro-amount">₹{state?.rate?state?.rate:"No Amount Available"}</div>
                <div className="kgs">
                    <div>250 g</div>
                    <div>500 g</div>
                    <div>750 g</div>
                    <div>1000 g</div>
                </div>
                <div className="stars">
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                </div>
                <p>{state.dis?state.dis:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatum nisi animi ad cupiditate similique ut! Hic ipsa aspernatur eius quam, nemo voluptatum veniam sapiente, enim distinctio magni natus repellendus!"}</p>
                <div className="add-cart-btn" onClick={addTocart} >Add to Cart</div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails;