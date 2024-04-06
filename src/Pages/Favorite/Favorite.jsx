import React, { useContext } from 'react'
import "./Favorite.css";
import { ContentData } from '../../App';
const Favorite = () => {
  const { setFav,fav} = useContext(ContentData);
  const deleteFav=(id)=>{
    setFav(fav.filter((favitem)=>favitem.id !==id))
  }
  return (
    <div className='fav-container'>
      <div className="fav-row">
       {fav.map((favItem)=>{
        return  <div className="fav-col" key={favItem.id}>
        <div className="image">
          <img src={favItem.img}/>
        </div>
        <div className="fav-text">
          <div className="names">
          <div className="fav-name">{favItem.text}</div>
          <div className="fav-g">{favItem.gram}g</div>
          </div>
          <div className="amounts">
            <div className="left-col">
              <div className="first">${favItem.rate}</div>
              <div className="second">${favItem.rate-favItem.discount}</div>
            </div>
            <div className="stars">
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
            </div>
          </div>
        </div>
        <div className="delete-btn" onClick={()=>deleteFav(favItem.id)} >
          <i className='fa fa-trash'></i>
        </div>
      </div>
       })}
      </div>
    </div>
  )
}

export default Favorite