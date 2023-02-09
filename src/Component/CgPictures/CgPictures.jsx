import "./CgPictures.scss";

import rooms from "../../Assets/Image.png";
import rooms2 from "../../Assets/Image2.png";
import rooms3 from "../../Assets/Image3.png";
import rooms4 from "../../Assets/Image4.png";
import rooms5 from "../../Assets/Image5.png";
import rooms6 from "../../Assets/Image6.png";
import { useEffect, useRef, useState } from "react";

export const Pictures = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();
  const child = useRef();

  useEffect(() => {
    const showed = (e) => {
      setShow(true);
      console.log("enter");
    };

    const remove = (e) => {
      setShow(false);
      console.log("leave");
    };

    const block = ref.current;
    const inBlock = child.current;

    block.addEventListener("mouseenter", showed);

    block.addEventListener("mouseleave", remove);
  }, []);

  return (
    <>
      <div className="mainImg">
        <div className="block" ref={ref}>
          {show ? (
            <div className="inBlock" ref={child}>
              <p>Bedroom</p>
              <button>Eplore</button>
            </div>
          ) : null}

          <img src={rooms6} alt="" />
        </div>

        <div className="block" ref={ref}>
          {show ? (
            <div className="inBlock" ref={child}>
              <p>Dining Room</p>
              <button>Eplore</button>
            </div>
          ) : null}
          <img src={rooms2} alt="" />
        </div>

        <div className="block" ref={ref}>
          {show ? (
            <div className="inBlock" ref={child}>
              <p>Living Room</p>
              <button>Eplore</button>
            </div>
          ) : null}
          <img src={rooms3} alt="" />
        </div>

        <div className="block" ref={ref}>
          {show ? (
            <div className="inBlock" ref={child}>
              <p>Meeting Room</p>
              <button>Eplore</button>
            </div>
          ) : null}
          <img src={rooms4} alt="" />
        </div>

        <div className="block" ref={ref}>
          {show ? (
            <div className="inBlock" ref={child}>
              <p>Expra Room</p>
              <button>Eplore</button>
            </div>
          ) : null}
          <img src={rooms5} alt="" />
        </div>

        <div className="block" ref={ref}>
          {show ? (
            <div className="inBlock" ref={child}>
              <p>Living Room</p>
              <button>Eplore</button>
            </div>
          ) : null}
          <img src={rooms6} alt="" />
        </div>
      </div>
    </>
  );
};
