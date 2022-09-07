import React, { useState } from "react";
import Employee from "../EmployeeForm/Employee";
import Laptop from "../LaptopForm/Laptop";
import NavBar from "../Nav/NavBar";

import styles from "./MainForm.module.css";

const MainForm = () => {
  const [laptopIsShown, setLaptopIsShown] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

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
        laptopIsShown={laptopIsShown}
      />
      <form on onSubmit={formSubmitHandler} className={styles["main-box"]}>
        {!laptopIsShown && <Employee onNextBtnClick={laptopShowHandler} />}
        {laptopIsShown && (
          <Laptop
            onBackBtnClick={employeeShowHandler}
            onSubmit={formSubmitHandler}
          />
        )}
      </form>
    </div>
  );
};

export default MainForm;
