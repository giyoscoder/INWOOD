import style from "./Move.module.scss";
import one from "../../../Assets/creationOne.png";
import two from "../../../Assets/creationTwo.png";
import { useState, useRef, useEffect } from "react";

export const Move = () => {
  const [hover, setHover] = useState(false);
  const refed = useRef();

  useEffect(() => {
    const hovered = () => {
      setHover(true);
    };

    const hovRemove = () => {
      setHover(false);
    };

    const element = refed.current;

    element.addEventListener("mouseenter", hovered);
    element.addEventListener("mouseleave", hovRemove);
  }, []);

  return (
    <div className={style.topMain}>
      <div className={style.main}>
        {/* Cards start */}
        <div className={style.image} ref={refed}>
          <img src={one} alt="image" />
          {hover ? (
            <div class={style.about}>
              <p>Explore All Rooms</p>
            </div>
          ) : null}
        </div>

        <div className={style.image} ref={refed}>
          <img src={two} alt="image" />
          {hover ? (
            <div class={style.about}>
              <p>Explore All Rooms</p>
            </div>
          ) : null}
        </div>

        <div className={style.image} ref={refed}>
          <img src={one} alt="image" />
          {hover ? (
            <div class={style.about}>
              <p>Explore All Rooms</p>
            </div>
          ) : null}
        </div>

        {/* Cards finish */}
      </div>
    </div>
  );
};
