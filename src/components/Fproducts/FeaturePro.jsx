import "../Fproducts/FeaturePro.css";
import Fproducts from "../Fproducts/Fproducts.js";
import FeatureProList from "./FeatureProList";
import { ContentData } from "../../App";
import { useContext } from "react";
const FeaturePro = () => {
  const {setData,setImage,setCart,cart,setFav,fav}=useContext(ContentData);
  return (
    <div className="feature-products">
      <h3>Feature Products</h3>
      <div className="row">
        {Fproducts.map((product) => (
          <FeatureProList
            product={product}
            key={product.id}
            setData={setData}
            setImage={setImage}
            setCart={setCart}
            cart={cart}
            setFav={setFav}
            fav={fav}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturePro;
