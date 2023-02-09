import "./Products.scss";
import one from "../../Assets/Armchair.png";
import bgChair from "../../Assets/bgChair.png";
import dining from "../../Assets/diningCgair.png";
import minisofa from "../../Assets/miniSofa.png";
import sofa from "../../Assets/sofa.png";

export function Products() {
  return (
    <div className=" mainProducts">
      <h1 className="prdTitle" id="products">
        Popular Products
      </h1>
      <img src={bgChair} alt="backgroundChair" className="bgChair" />

      <div className="mainDiv">
        <div className="card">
          <img src={one} alt="" />
          <div>
            <p>
              <b>Armchair</b>
            </p>
            <p>
              Light single chair <br /> <b>$145</b>
            </p>
          </div>
        </div>

        <div className="card pink">
          <img src={dining} alt="" />
          <div>
            <p>
              <b>Dining Chair</b>
            </p>
            <p>
              Light single chair <br /> <b>$145</b>
            </p>
          </div>
        </div>

        <div className="card threeColor">
          <img src={minisofa} alt="" />
          <div>
            <p>
              <b>Minimal Sofa</b>
            </p>
            <p>
              Light single chair <br /> <b>$145</b>
            </p>
          </div>
        </div>

        <div className="card fourColor">
          <img src={one} alt="" />
          <div>
            <p>
              <b>Armchair</b>
            </p>
            <p>
              Light single chair <br /> <b>$145</b>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={sofa} alt="" />
          <div>
            <p>
              <b>Premium Sofa</b>
            </p>
            <p>
              Light single chair <br /> <b>$145</b>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={one} alt="" />
          <div>
            <p>
              <b>Armchair</b>
            </p>
            <p>
              Light single chair <br /> <b>$145</b>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={one} alt="" />
          <div>
            <p>
              <b>Armchair</b>
            </p>
            <p>
              Light single chair <br /> <b>$145</b>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={one} alt="" />
          <div>
            <p>
              <b>Armchair</b>
            </p>
            <p>
              Light single chair <br /> <b>$145</b>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={one} alt="" />
          <div>
            <p>
              <b>Armchair</b>
            </p>
            <p>
              Light single chair <br /> <b>$145</b>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={one} alt="" />
          <div>
            <p>
              <b>Armchair</b>
            </p>
            <p>
              Light single chair <br /> <b>$145</b>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={one} alt="" />
          <div>
            <p>
              <b>Armchair</b>
            </p>
            <p>
              Light single chair <br /> <b>$145</b>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={one} alt="" />
          <div>
            <p>
              <b>Armchair</b>
            </p>
            <p>
              Light single chair <br /> <b>$145</b>
            </p>
          </div>
        </div>

        <div className="card">
          <img src={one} alt="" />
          <div>
            <p>
              <b>Armchair</b>
            </p>
            <p>
              Light single chair <br /> <b>$145</b>
            </p>
          </div>
        </div>
      </div>

      <button style={{ margin: "30px auto", display: " block" }}>
        Explore all items <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
