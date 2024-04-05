import { useContext } from 'react'
import "../ProductDetails/ProductDetails.css";
import DefaultImage from "/src/assets/default-image.jpeg";
import { ContentData } from "../../App";
const ProductDetails = () => {
    const {data,image,setImage}=useContext(ContentData);
    const addImage=(img)=>{
        setImage(img);
    }
  return (
    <div className='product-container'>
        <div className="row">
            <div className="col">
                <div className="left-col">
                    <div className={image.includes(data.images?.img1)?"col-1 active":"col-1"} onClick={()=>addImage(data.images?.img1)}>
                        <img src={data.images?.img1?data.images?.img1:DefaultImage}/>
                    </div>
                    <div className={image.includes(data.images?.img2)?"col-1 active":"col-1"} onClick={()=>addImage(data.images?.img2)}>
                        <img src={data.images?.img2?data.images?.img2:DefaultImage}/>
                    </div>
                    <div className={image.includes(data.images?.img3)?"col-1 active":"col-1"} onClick={()=>addImage(data.images?.img3)}>
                        <img src={data.images?.img3?data.images?.img3:DefaultImage}/>
                    </div>
                    <div className={image.includes(data.images?.img4)?"col-1 active":"col-1"} onClick={()=>addImage(data.images?.img4)}>
                        <img src={data.images?.img4?data.images?.img4:DefaultImage} />
                    </div>
                    <div className={image.includes(data.images?.img5)?"col-1 active":"col-1"} onClick={()=>addImage(data.images?.img5)}>
                        <img src={data.images?.img5?data.images?.img5:DefaultImage} />
                    </div>
                </div>
                <div className="right-col">
                    <img src={image?image:DefaultImage}/>
                </div>
            </div>
            <div className="col">
                <div className="pro-name">{data?.text?data?.text:"No Name Available"}</div>
                <div className="pro-amount">₹{data?.rate?data?.rate:"No Amount Available"}</div>
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
                <p>{data.dis?data.dis:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptatum nisi animi ad cupiditate similique ut! Hic ipsa aspernatur eius quam, nemo voluptatum veniam sapiente, enim distinctio magni natus repellendus!"}</p>
                <div className="add-cart-btn">Add to Cart</div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails