import "../Services/Service.css";
const Service = () => {
  return (
    <div className='service-container'>
        <h3>Services</h3>
        <div className="row">
            <div className="col">
            <i className="fa-solid fa-rocket"></i>
            <strong>Free delivery</strong>
            </div>
            <div className="col">
            <i className="fa-solid fa-hand-holding-dollar"></i>
            <strong>Easy returns</strong>
            </div>
            <div className="col">
            <i className="fa-solid fa-dollar-sign"></i>
            <strong>Secure payment</strong>
            </div>
            <div className="col">
            <i className="fa-solid fa-headphones"></i>
            <strong>24/7 support</strong>
            </div>
            <div className="col">
            <i className="fa-solid fa-comment-dots"></i>
            <strong>99 customer</strong>
            </div>
        </div>
    </div>
  )
}

export default Service