import { Fragment } from "react";
import Input from "../../Inputs/Input";
import Radio from "../../Inputs/Radio";
import Select from "../../Inputs/Select";

import styles from "./Laptop.module.css";

const Laptop = (props) => {
  return (
    <Fragment>
      <div className={styles["box-style"]}>
        <Input
          styles="md"
          label="ლეპტოპის სახელი"
          title="ლათინური სიმბოლოები"
        />
        <Select array={[]} styles="md" />
      </div>
      <div className={styles["box-style-wrap"]}>
        <Select styles="sm" array={[]} />
        <Input styles="sm" label="CPU-ს ბირთვი" title="მხოლოდ ციფრები" />
        <Input styles="sm" label="CPU-ს ნაკადი" title="მხოლოდ ციფრები" />
        <Input styles="md" label="ლეპტოპის RAM (GB)" title="მხოლოდ ციფრები" />
        <Radio styles="md" id="ssd" id2="hdd" title="მეხსიერების ბარათი" />
        {/*         <Input
          styles="md"
          type="radio"
          label="მეხსიერების ბარათი"
          title="მხოლოდ ციფრები"
        /> */}
      </div>
    </Fragment>
  );
};

export default Laptop;
