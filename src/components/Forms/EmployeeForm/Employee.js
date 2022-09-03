import { Fragment } from "react";
import Input from "../../Inputs/Input";
import Select from "../../Inputs/Select";

import styles from "./Employee.module.css";

const Employee = () => {
  const optionsArray = ["Dog", "Cat", "Hamster"];
  const optionsArray2 = ["Parrot", "Spider", "goldfish"];
  return (
    <Fragment>
      <div className={styles["box-style"]}>
        <Input
          id="name"
          label="სახელი"
          type="select"
          styles="sm"
          title="უნდა შეიცავდეს მინ 2 სიმბოლოს"
        />
        <Input
          id="lastName"
          label="გვარი"
          type="text"
          styles="sm"
          title="უნდა შეიცავდეს მინ 2 სიმბოლოს"
        />
      </div>
      <div className={styles["box-style-column"]}>
        <Select styles="lg" name="თიმი" array={optionsArray} />
        <Select styles="lg" name="პოზიცია" array={optionsArray2} />
      </div>
      <div className={styles["box-style-column"]}>
        <Input
          id="name"
          label="სახელი"
          type="text"
          styles="lg"
          title="უნდა შეიცავდეს მინ 2 სიმბოლოს"
        />
        <Input
          id="lastName"
          label="გვარი"
          type="text"
          styles="lg"
          title="უნდა შეიცავდეს მინ 2 სიმბოლოს"
        />
      </div>
    </Fragment>
  );
};

export default Employee;
