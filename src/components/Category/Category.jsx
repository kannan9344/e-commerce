import "../Category/Category.css";
import fruit from "/src/assets/fruit.png";
import vegetable from "/src/assets/vegetable.png";
import dfruit from "/src/assets/dry-fruit.png";
import meat from "/src/assets/meat.png";
import milk from "/src/assets/milk-1.png";
import { ContentData } from "../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Category = () => {
  const { productdata, setproductData} = useContext(ContentData);
    const data=[
        {img:vegetable,Name:"Vegetables"},
        {img:fruit,Name:"Fruits"},
        {img:dfruit,Name:"Dry-Fruits"},
        {img:meat,Name:"Meat"},
        {img:milk,Name:"Milk & Egg"},
    ]
    const filterCategory=(cate)=>{
      let resultcate=productdata.filter((item)=>item.category==cate);
      setproductData(resultcate);
    }
  return (
    <div className='category-container'>
        <h3>Category</h3>
        <div className="row">
            {data.map((pro,index)=>{
              return(
                <Link to={"/Shop"} key={index} >
                  <div className="col" key={index} onClick={()=>filterCategory(pro.Name)} >
                      <img src={pro.img}/>
                      <strong>{pro.Name}</strong>
                      </div>
                </Link>
              )
            })}
        </div>
    </div>
  )
}

export default Category;