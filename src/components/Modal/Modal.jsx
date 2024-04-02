import "../Modal/Modal.css";
const Modal = () => {
  return (
    <div className="modal">
        <div className="modal-dialogue">
                <div className="col">
                    <div className="modal-img">
                        <img src="" alt="" />
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
                    <div className="name">Potato</div>
                    <div className="amounts">
                        <div className="rate">$90</div>
                        <div className="kg">200g</div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error delectus iste ab sed! Molestiae, officia minus, alias officiis aut vel porro placeat temporibus sunt ullam, et voluptatem quos incidunt aliquam!</p>
                    <div className="btn cart-btn">Add to Cart</div>
                    <div className="btn buy-btn">Buy Now</div>
                </div>
                <div className="close-btn">
                    <i className="fa fa-close"></i>
                </div>
        </div>
    </div>
  )
}

export default Modal