import React, { useState } from "react";
import Employee from "../EmployeeForm/Employee";
import Laptop from "../LaptopForm/Laptop";
import NavBar from "../Nav/NavBar";

import "./MainForm.css";

const MainForm = () => {
  const [laptopIsShown, setLaptopIsShown] = useState(false);

  const laptopShowHandler = () => {
    setLaptopIsShown(true);
  };

  const employeeShowHandler = () => {
    setLaptopIsShown(false);
  };
  return (
    <div className="basic-form">
      <NavBar
        onLaptopClick={laptopShowHandler}
        onEmployeeClick={employeeShowHandler}
      />
      <div className="main-box">
        {!laptopIsShown && <Employee />}
        {laptopIsShown && <Laptop />}
      </div>
    </div>
  );
};

export default MainForm;
