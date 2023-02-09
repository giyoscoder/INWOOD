import style from "./Fixed.module.scss";

export const Fixed = () => {
  return (
    <div className={style.fixedLeft}>
      <p className={style.ourCreation}>
        Our <br /> Own Creation
      </p>
      <p className={style.design}>Designed in our studio</p>

      <div className={style.moveScroll}>
        <p className={style.more}>More</p>

        <div className={style.parent}>
          <div className={style.child}></div>
        </div>

        <i class="fa-solid fa-arrow-left"></i>

        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};
