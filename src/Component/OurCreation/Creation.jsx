import style from "./creation.module.scss";
import { Fixed } from "./Fixed/Fixed";
import { Move } from "./Move/Move";

export const Creation = () => {
  return (
    <>
      <div className={style.mainCreation}>
        <div>
          <Fixed />
        </div>
        <div>
          <Move />
        </div>
      </div>
    </>
  );
};
