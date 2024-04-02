import "../Fproducts/FeaturePro.css";
import Fproducts from "../Fproducts/Fproducts.js";
import FeatureProList from "./FeatureProList";
const FeaturePro = () => {
  return (
    <div className='feature-products'>
        <h3>Feature Products</h3>
        <div className="row mobile lap">
           {Fproducts.map((product)=><FeatureProList product={product} key={product.id} />)}
        </div>
    </div>
  )
}

export default FeaturePro;