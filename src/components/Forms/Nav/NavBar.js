import React from "react";
import { Link, NavLink } from "react-router-dom";
import ButtonArrow from "../../Button/ButtonArrow";

import "./NavBar.css";

const NavBar = (props) => {
  const onLaptotClickHandler = () => {
    props.onLaptopClick();
  };

  const onEmployeeClickHandler = () => {
    props.onEmployeeClick();
  };

  return (
    <div className="nav">
      <ButtonArrow title="<" />
      <div className="employee-info" onClick={onEmployeeClickHandler}>
        თანამშრომლის ინფო
      </div>
      <div className="laptop-info" onClick={onLaptotClickHandler}>
        ლეპტოპის მახასიათებლები
      </div>
    </div>
  );
};

export default NavBar;
