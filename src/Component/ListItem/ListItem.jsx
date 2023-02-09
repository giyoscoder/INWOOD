import "./ListItem.scss";
import { NavLink as a } from "react-router-dom";

const ListItem = () => {
  return (
    <>
      <input type="checkbox" id="check" hidden />
      <ul className="listItems">
        <label for="check" className="eks">
          <i class="fa-solid fa-x"></i>
        </label>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#categories">Categories</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <label for="check" className="bar">
        <i class="fa-solid fa-bars-staggered"></i>
      </label>
    </>
  );
};

export default ListItem;
