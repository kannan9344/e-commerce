import { useContext, useState } from "react";
import "../Shop/Shop.css";
import { Link } from "react-router-dom";
import { ContentData } from "../../App.jsx";
const Shop = () => {
  const {
    productdata,
    setproductData,
    setFav,
    fav,
    setImage,
    cart,
    setCart,
  } = useContext(ContentData);
  const [toggle,setToggle]=useState(false);
  const addData = (product) => {
    setImage(product.img);
  };
  const addCart = (product) => {
    if (cart.includes(product)) {
      return;
    } else {
      setCart([...cart, product]);
    }
  };
  const addFav = (product) => {
    if (fav.includes(product)) {
      return;
    } else {
      setFav([...fav, product]);
    }
  };
  const [filtered, setFiltered] = useState(productdata);
  const filterCategory = (category) => {
    if (category == "All") {
      setproductData(filtered);
    } else {
      let filterdata = filtered.filter(
        (product) => product.category == category || product.text == category
      );
      setproductData(filterdata);
    }
  };
  const filterPrice = (price_1, price_2) => {
    let price = productdata.filter((product) => {
      if (product.rate >= price_1 && product.rate <= price_2) {
        return product;
      }
    });
    setproductData(price);
  };
  return (
    <div className="shop-container">
      <div className="top">
      <h2>SHOP</h2>
      <div className="fil-btn" onClick={()=>setToggle(!toggle)} >Filter</div>
      </div>
      <div className="shop-row">
        <div className={toggle?"shop-col active":"shop-col"}>
          <strong>Categories</strong>
          <div className="shop-category">
            <div className="category" onClick={() => filterCategory("All")}>
              All
            </div>
            <div
              className="category"
              onClick={() => filterCategory("Vegitables")}
            >
              Vegitables
            </div>
            <div className="category" onClick={() => filterCategory("Fruits")}>
              Fruits
            </div>
            <div
              className="category"
              onClick={() => filterCategory("DryFruits")}
            >
              DryFruits
            </div>
            <div className="category" onClick={() => filterCategory("Meat")}>
              Meat
            </div>
            <div
              className="category"
              onClick={() => filterCategory("Milk & Egg")}
            >
              Milk & Egg
            </div>
          </div>
          <strong>Prices</strong>
          <div className="prices">
            <div className="price" onClick={() => filterPrice(10, 50)}>
              ₹10-₹50
            </div>
            <div className="price" onClick={() => filterPrice(50, 100)}>
              ₹50-₹100
            </div>
            <div className="price" onClick={() => filterPrice(100, 150)}>
              ₹100-₹150
            </div>
            <div className="price" onClick={() => filterPrice(150, 200)}>
              ₹150-₹200
            </div>
            <div className="price" onClick={() => filterPrice(200, 250)}>
              ₹200-₹250
            </div>
            <div className="price" onClick={() => filterPrice(250, 300)}>
              ₹250-₹300
            </div>
            <div className="price" onClick={() => filterPrice(300, 350)}>
              ₹300-₹350
            </div>
            <div className="price" onClick={() => filterPrice(350, 700)}>
              ₹350-₹700
            </div>
          </div>
          <strong>Related Names</strong>
          <div className="names">
            <div className="name" onClick={() => filterCategory("Broccoli")}>
              Broccoli
            </div>
            <div className="name" onClick={() => filterCategory("Capsicum")}>
              Capsicum
            </div>
            <div className="name" onClick={() => filterCategory("Apple")}>
              Apple
            </div>
            <div className="name" onClick={() => filterCategory("Cherry")}>
              Cherry
            </div>
            <div className="name" onClick={() => filterCategory("Cashew")}>
              Cashew
            </div>
            <div className="name" onClick={() => filterCategory("Appricot")}>
              Appricot
            </div>
            <div
              className="name"
              onClick={() => filterCategory("Lobster Meat")}
            >
              Lobster Meat
            </div>
            <div className="name" onClick={() => filterCategory("Goat Meat")}>
              Goat Meat
            </div>
            <div className="name" onClick={() => filterCategory("Egg")}>
              Egg
            </div>
            <div className="name" onClick={() => filterCategory("Milk")}>
              Milk
            </div>
          </div>
        </div>
        <div className="shop-col">
          {productdata.map((product) => {
            return (
              <div className="product" key={product.id} >
                <div className="image">
                  <img src={product.img} alt={product.text} />
                </div>
                <div className="product-content">
                  <div className="names">
                    <div className="name">{product.text}</div>
                    <div className="kg">{product.gram} g</div>
                  </div>
                  <div
                    className="two"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="amounts">
                      <div className="f-amount">$ {product.rate}</div>
                      <div className="s-amount">
                        $ {product.rate - product.discount}
                      </div>
                    </div>
                    <div className="stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                  <div className="discount">{product.discount}%</div>
                </div>
                <div className="icons">
                  <div className={fav.includes(product)?"icon active":"icon"} onClick={() => addFav(product)}>
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className={cart.includes(product)?"icon active":"icon"} onClick={() => addCart(product)}>
                    <i className="fa fa-shopping-cart"></i>
                  </div>
                  <Link
                    to={"/Product-details"}
                    onClick={() => addData(product)}
                    state={product}
                  >
                    <div className="icon">
                      <i className="fa fa-eye"></i>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
