import "./Navbar.scss";
import IconNav from "../IconNav/IconNav";
import ListItem from "../ListItem/ListItem";
import Logo from "../../Assets/Logo.png";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Products } from "../Products/Products";
import { Categories } from "../Categories/Categories";

export default function Navbar({ showModal }) {
  return (
    <nav className="navbar">
      <img src={Logo} alt="" />
      <ListItem />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
      <IconNav showModal={showModal} />
    </nav>
  );
}
