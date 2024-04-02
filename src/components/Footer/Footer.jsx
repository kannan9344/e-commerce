import "../Footer/Footer.css";
import Paypal from "/src/assets/paypal.png";
import Master from "/src/assets/mastercard.png";
import Visa from "/src/assets/visa.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col">
          <h2>SHOP</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, id?
          </p>
          <div className="mail">
            <i className="fa-solid fa-envelope"></i>
            <p>contact@gmail.com</p>
          </div>
          <div className="num">
            <i className="fa fa-phone"></i>
            <p>+ 876576765423</p>
          </div>
        </div>
        <div className="col">
          <strong>Media</strong>
          <div className="media-icons">
            <div className="icon">
              <i className="fa-brands fa-facebook" style={{ color: "#3b5998" }}></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-instagram" style={{ color: "#f09433" }}></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-linkedin" style={{ color: "#0077b5" }}></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-twitter" style={{color:"#00acee"}}></i>
            </div>
          </div>
        </div>
        <div className="col">
          <strong>ABOUT</strong>
          <p>
            <Link className="list" to={"/About-us"}>
              About Us
            </Link>
          </p>
          <p>
            <Link className="list" to={"/Contact-us"}>
              Contact Us
            </Link>
          </p>
          <p>Help Center</p>
        </div>
        <div className="col">
          <strong>Payment</strong>
         <div className="images">
         <img src={Paypal} />
          <img src={Master} />
          <img src={Visa} />
         </div>
        </div>
      </div>
    </div> 
  );
};

export default Footer;
