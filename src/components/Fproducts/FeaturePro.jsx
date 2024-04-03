import "../Fproducts/FeaturePro.css";
import Fproducts from "../Fproducts/Fproducts.js";
import FeatureProList from "./FeatureProList";
const FeaturePro = ({ modalstate, setModalstate,modalpro,setModalpro }) => {
  return (
    <div className="feature-products">
      <h3>Feature Products</h3>
      <div className="row mobile lap">
        {Fproducts.map((product,index) => (
          <FeatureProList
          index={index}
            setModalstate={setModalstate}
            modalstate={modalstate}
            product={product}
            key={product.id}
            modalpro={modalpro}
            setModalpro={setModalpro}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturePro;
