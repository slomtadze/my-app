import React from "react";
import { Link, NavLink } from "react-router-dom";
import ButtonArrow from "../../Button/ButtonArrow";

import styles from "./NavBar.module.css";

const NavBar = (props) => {
  const onLaptotClickHandler = () => {
    props.onLaptopClick();
  };

  const onEmployeeClickHandler = () => {
    props.onEmployeeClick();
  };

  return (
    <div className={styles.nav}>
      <ButtonArrow title="<" />
      <div className={styles["employee-info"]} onClick={onEmployeeClickHandler}>
        თანამშრომლის ინფო
      </div>
      <div className={styles["laptop-info"]} onClick={onLaptotClickHandler}>
        ლეპტოპის მახასიათებლები
      </div>
    </div>
  );
};

export default NavBar;
