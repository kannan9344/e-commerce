import React, { useEffect, useState } from 'react'
import vegitable from "../../assets/vegetables.jpg";
import fruit from "../../assets/fruit-bg.jpg";
import dryFruit from "../../assets/dry_fruits.jpg";
import meat from "../../assets/meat-bg.jpg";
import fishMeat from "../../assets/fish_meat.jpg";
import "../Banner/Banner.css";
const Banner = () => {
    const data=[
        {img:vegitable,text:"Farm fresh Vegetables",text2:"100% Organic"},
        {img:fruit,text:"Farm fresh Fruits",text2:"100% Organic"},
        {img:dryFruit,text:"Farm fresh Dry Fruits",text2:"100% Organic"},
        {img:meat,text:"Farm fresh Meats",text2:"100% Organic"},
        {img:fishMeat,text:"Farm fresh Fish Meats",text2:"100% Organic"},
];
const [count,setCount]=useState(0);
const inCreament=()=>{
    setCount(()=>count==data.length-1?0:count+1)
}
const deCreament=()=>{
    setCount(()=>count<=0?data.length-1:count-1)
}
useEffect(()=>{
    const Time=setInterval(()=>{
        inCreament();
    },3000)
    return ()=>clearInterval(Time)
},[count]);
  return (
    <div className='banner-container'>
        <div className="banner" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${data[count].img})`}}>
            <div className="banner-content">
                <h1>{data[count].text} <br />{data[count].text2}</h1>
                <div className="btn">Shop Now</div>
            </div>
            <div className="btns">
                <div className="prev-btn" onClick={deCreament}>
                    <i className='fa fa-chevron-left'></i>
                </div>
                <div className="next-btn" onClick={inCreament}>
                    <i className='fa fa-chevron-right'></i>
                </div>
            </div>
            <div className="dots">
                <div className={count==0?"dot active":"dot"}></div>
                <div className={count==1?"dot active":"dot"}></div>
                <div className={count==2?"dot active":"dot"}></div>
                <div className={count==3?"dot active":"dot"}></div>
                <div className={count==4?"dot active":"dot"}></div>
            </div>
        </div>
    </div>
  )
}

export default Banner;