import React, { useState } from "react";
import Employee from "../EmployeeForm/Employee";
import Laptop from "../LaptopForm/Laptop";
import NavBar from "../Nav/NavBar";

import styles from "./MainForm.module.css";

const MainForm = () => {
  const [laptopIsShown, setLaptopIsShown] = useState(false);

  const laptopShowHandler = () => {
    setLaptopIsShown(true);
  };

  const employeeShowHandler = () => {
    setLaptopIsShown(false);
  };
  return (
    <div className={styles["basic-form"]}>
      <NavBar
        onLaptopClick={laptopShowHandler}
        onEmployeeClick={employeeShowHandler}
      />
      <form className={styles["main-box"]}>
        {!laptopIsShown && <Employee onNextBtnClick={laptopShowHandler} />}
        {laptopIsShown && <Laptop onBackBtnClick={laptopShowHandler} />}
      </form>
    </div>
  );
};

export default MainForm;
