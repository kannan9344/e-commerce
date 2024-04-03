import "./Modal.css";
import Dry_1 from "/src/assets/dry-1.png";
const Modal = ({ modalstate, setModalstate,modalpro}) => {
  return (
    <div className={`modal ${modalstate ? "active" : ""}`}>
      <div className="modal-dialogue">
        <div className="col">
          <div className="modal-img">
            <img src={modalpro?modalpro.img:Dry_1} alt="" />
          </div>
          <div className="modal-btns">
            <div className="prev-btn">
              <i className="fa fa-chevron-left"></i>
            </div>
            <div className="next-btn">
              <i className="fa fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="name">{modalpro?modalpro.name:""}</div>
          <div className="amounts">
            <div className="rate">${modalpro?modalpro.rate:""}</div>
            <div className="kg">{modalpro?modalpro.gram:""}g</div>
          </div>
          <p>
            Error delectus iste ab sed! Molestiae, officia minus, alias officiis
            aut vel porro placeat temporibus sunt ullam, et voluptatem quos
            incidunt aliquam!
          </p>
          <div className="btn cart-btn">Add to Cart</div>
          <div className="btn buy-btn">Buy Now</div>
        </div>
        <div className="close-btn" onClick={() => setModalstate(!modalstate)}>
          <i className="fa fa-close"></i>
        </div>
      </div>
    </div>
  );
};

export default Modal;
