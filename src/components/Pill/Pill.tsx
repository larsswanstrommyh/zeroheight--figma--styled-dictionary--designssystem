import React from "react";
import styles from "./Pill.module.scss";

export interface PillProps {
  children: React.ReactNode;
  color?: string;
}

const Pill: React.FC<PillProps> = ({ children, color }) => {
  return (
    <span
      className={styles.pill}
      style={color ? { backgroundColor: color } : {}}
    >
      {children}
    </span>
  );
};

export default Pill;
