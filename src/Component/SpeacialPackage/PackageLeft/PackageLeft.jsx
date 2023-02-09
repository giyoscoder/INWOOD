import "./PackageLeft.scss";
import packaged from "../../../Assets/ImagePackage.png";
import bigStar from "../../../Assets/bigStar.png";

export const PackageLeft = () => {
  return (
    <>
      <div className="packageLeft">
        <div className="packageImg">
          <img src={packaged} alt="packageImg" />
        </div>

        <div className="imgAbout">
          <div>
            <p className="larkin">Larkin Wood Full Set</p>
            <img src={bigStar} alt="star" />
            <p>$729.99</p>
          </div>
          <div>
            <button>
              Add to card <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
