import React from "react";

import styles from "./ButtonArrow.module.css";

const ButtonArrow = (props) => {
  return <button className={styles["button-arrow"]}>{props.title}</button>;
};

export default ButtonArrow;
