import "../Category/Category.css";
import fruit from "/src/assets/fruit.png";
import vegetable from "/src/assets/vegetable.png";
import dfruit from "/src/assets/dry-fruit.png";
import meat from "/src/assets/meat.png";
import milk from "/src/assets/milk-1.png";
import CateList from "./CateList";
const Category = () => {
    const data=[
        {img:vegetable,Name:"Vegetables"},
        {img:fruit,Name:"Fruits"},
        {img:dfruit,Name:"Dry-Fruits"},
        {img:meat,Name:"Meat"},
        {img:milk,Name:"Milks"},
    ]
  return (
    <div className='category-container'>
        <h3>Category</h3>
        <div className="row">
            {data.map((pro,index)=><CateList pro={pro} key={index}/>)}
        </div>
    </div>
  )
}

export default Category;