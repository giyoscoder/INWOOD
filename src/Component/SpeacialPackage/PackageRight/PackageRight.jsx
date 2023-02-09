import "./PackageRight.scss";
import packOne from "../../../Assets/ImagePackage1.png";
import packTwo from "../../../Assets/ImagePackage2.png";
import packThree from "../../../Assets/ImagePackage3.png";
import smallStar from "../../../Assets/smallStar.png";

export const PackageRight = () => {
  return (
    <div>
      <div className="top">
        <p className="description">Description</p>
        <p className="lorem">
          Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to
          your outdoor space, this cast Aluminum Chaise Lounge combines the
          appearance, function and quality all together, offering you with the
          best experience.
        </p>
        <p>
          See More <i class="fa-solid fa-chevron-down"></i>
        </p>
      </div>

      <div className="scrollParant">
        <div className="bottomScrolled">
          <div className="typeRoom">
            <div className="leftImg">
              <img src={packOne} alt="" />
            </div>
            <div className="rightAbout">
              <div className="set">
                <p className="livingRoom">Living Room Family Set</p>
                <img src={smallStar} alt="star" />
                <p>See Details</p>
              </div>
              <div className="price">
                <p>$229.99</p>
              </div>
            </div>
          </div>

          <div className="typeRoom">
            <div className="leftImg">
              <img src={packTwo} alt="" />
            </div>
            <div className="rightAbout">
              <div className="set">
                <p className="livingRoom">Living Room Special Set</p>
                <img src={smallStar} alt="star" />
                <p>See Details</p>
              </div>
              <div className="price">
                <p>$329.99</p>
              </div>
            </div>
          </div>

          <div className="typeRoom">
            <div className="leftImg">
              <img src={packThree} alt="" />
            </div>
            <div className="rightAbout">
              <div className="set">
                <p className="livingRoom">Living Room Special Set</p>
                <img src={smallStar} alt="star" />
                <p>See Details</p>
              </div>
              <div className="price">
                <p>$587.99</p>
              </div>
            </div>
          </div>

          <div className="typeRoom">
            <div className="leftImg">
              <img src={packTwo} alt="" />
            </div>
            <div className="rightAbout">
              <div className="set">
                <p className="livingRoom">Living Room Special Set</p>
                <img src={smallStar} alt="star" />
                <p>See Details</p>
              </div>
              <div className="price">
                <p>$329.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
