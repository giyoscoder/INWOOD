import { Search } from "../Search/Search";
import { Pictures } from "../CgPictures/CgPictures";
import "./Category.scss";

export const Category = () => {
  return (
    <div className="container">
      <h1 className="expore" id="categories">
        Explore by Category
      </h1>
      <div className="sides">
        <Search />
        <Pictures />
      </div>
    </div>
  );
};
