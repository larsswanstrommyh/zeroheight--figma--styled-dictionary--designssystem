import Button from "../Button/Button";
import Pill from "../Pill/Pill";
import Style from "./Tile.module.scss";

export const Tile = ({ children }: any) => {
  return (
    <div className={Style.tile}>
      <h2 className={Style.title}>
        Ut enim ad minima veniam, quis nostrum exercitationem
      </h2>
      <div className={Style.ball}></div>
    </div>
  );
};
