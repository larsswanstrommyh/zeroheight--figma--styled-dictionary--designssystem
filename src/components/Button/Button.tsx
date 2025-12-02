import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "feature" | "standard";
};

const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  return (
    <div
      className={classNames(
        styles.button,
        variant == "feature" ? styles.feature : styles.standard,
      )}
    >
      {children}
    </div>
  );
};

export default Button;
