import "./Search.scss";
import Button from "../Button/Button";

export const Search = () => {
  return (
    <div className="main">
      <form className="form">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" className="Search" placeholder="Search" />
      </form>

      <div>
        <ul className="rooms">
          <li>Bedroom</li>
          <li>Dining Room</li>
          <li>Meeting Room</li>
          <li>Workspace</li>
          <li>Living Room</li>
          <li>Kitchen</li>
          <li>Living Space</li>
          <li>Exptra Room</li>
          <li>Living Room</li>
        </ul>
      </div>
      <Button>
        All Categories <i class="fa-solid fa-arrow-right"></i>
      </Button>
    </div>
  );
};
