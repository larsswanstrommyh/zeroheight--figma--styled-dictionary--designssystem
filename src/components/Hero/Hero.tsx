import { useContext } from "react";
import { ThemeContext } from "../../App";
import Style from "./Hero.module.scss";

export const Hero = ({ children }: any) => {
  const theme = useContext(ThemeContext);

  const style = {
    "--bg-image-src": `url(/${theme}.jpg)`,
  } as React.CSSProperties;

  return (
    <div style={style} className={Style.hero}>
      {children}
    </div>
  );
};
