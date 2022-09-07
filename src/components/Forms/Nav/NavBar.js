import React from "react";

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
      <button className={styles.button} onClick={btnClickHandler}>
        &#60;
      </button>
      <div className={styles.headers}>
        <div
          className={styles["employee-info"]}
          onClick={onEmployeeClickHandler}
        >
          თანამშრომლის ინფო
        </div>
        <div className={styles["laptop-info"]} onClick={onLaptotClickHandler}>
          ლეპტოპის მახასიათებლები
        </div>
      </div>
    </div>
  );
};

export default NavBar;
