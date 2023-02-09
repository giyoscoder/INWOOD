import style from "./Footer.module.scss";
import logo from "../../Assets/Logo.png";
import facebook from "../../Assets/facebook.png";
import twitter from "../../Assets/twitter.png";
import ball from "../../Assets/Ball.png";
import instagram from "../../Assets/insatgram.png";
import linkedin from "../../Assets/Linkiden.png";

export function Footer() {
  return (
    <div className="container">
      <div className={style.footerDiv}>
        <div className={style.footerchild}>
          <img src={logo} alt="" id="contact" />
          <div className={style.socialMedia}>
            <a href="">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="">
              {" "}
              <img src={linkedin} alt="linkiden" />
            </a>
            <a href="">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="">
              <img src={ball} alt="ball" />
            </a>
          </div>
          <p className={style.address}>
            <b>Address</b> <br /> +123 654 987 877 <br /> The Bronx, NY <br />{" "}
            14568, USA
          </p>
        </div>

        <div>
          <p className={style.account}>My Account</p>
          <ul className={style.footerLink}>
            <li>
              <a href="#">Sign in</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Order status</a>
            </li>
          </ul>
        </div>

        <div>
          <p className={style.account}>Help</p>
          <ul className={style.footerLink}>
            <li>
              <a href="#">Shipping</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Sizing</a>
            </li>
          </ul>
        </div>

        <div>
          <p className={style.account}>Shop</p>
          <ul className={style.footerLink}>
            <li>
              <a href="#">All Products</a>
            </li>
            <li>
              <a href="#">Bedroom</a>
            </li>
            <li>
              <a href="#">Dining Room</a>
            </li>
          </ul>
        </div>

        <div>
          <p className={style.account}>Legan Stuff</p>
          <ul className={style.footerLink}>
            <li>
              <a href="#">Shipping & Delivery</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy & Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <p className={style.copy}>Copyright ©2020 INWOOD. All Rights Reserved</p>
    </div>
  );
}
