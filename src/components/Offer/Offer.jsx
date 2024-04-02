import fruit from "/src/assets/fruit_dis.jpg";
import dry from "/src/assets/dry_dis.jpeg";
import meat from "/src/assets/meat_dis.jpeg";
import "../Offer/Offer.css";
import Col from "./Col";

const Offer = () => {
    const data=[
        {img:fruit,name:"Delivery",text:"Get fresh grocery delivered to you"},
        {img:dry,name:"Dry-Fruits",text:"Get fresh and organic dry foods"},
        {img:meat,name:"Meats",text:"Get fish meat and meats"},
    ]
  return (
    <div className='offer-container'>
        <div className="row">
          {data.map((d,index)=><Col d={d} key={index}/>)}
        </div>
    </div>
  )
}

export default Offer