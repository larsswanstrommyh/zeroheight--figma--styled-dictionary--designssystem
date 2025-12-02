import Style from "./Header.module.scss";
import Logotype from "../../assets/logotype.svg";
import { ThemeContext } from "../../App";

export const Header = () => (
  <div className={Style.header}>
    <div className={Style.logotype}>
      <img src={Logotype} />
      <div>Tjenare mannen!</div>
    </div>

    <ul className={Style.links}>
      <li>Ut enim</li>
      <li>Minima</li>
      <li>Quisnostrum</li>
      <li>Ut enim </li>
    </ul>
  </div>
);
