import { Fragment } from "react";
import Input from "../../Inputs/Input";
import Radio from "../../Inputs/Radio";
import Select from "../../Inputs/Select";
import Button from "../../Button/Button";

import styles from "./Laptop.module.css";

const Laptop = (props) => {
  const btnClickHandler = () => {
    props.onBackBtnClick();
  };

  const submitClickHandler = () => {};
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
        <Select styles="sm" array={[]} label="CPU" title="CPU" />
        <Input styles="sm" label="CPU-ს ბირთვი" title="მხოლოდ ციფრები" />
        <Input styles="sm" label="CPU-ს ნაკადი" title="მხოლოდ ციფრები" />
        <Input styles="md" label="ლეპტოპის RAM (GB)" title="მხოლოდ ციფრები" />
        <Radio styles="md" id="ssd" id2="hdd" title="მეხსიერების ბარათი" />
      </div>
      <div className={styles["box-style-wrap"]}>
        <Input
          styles="md"
          type="date"
          label="შეძენის რიცხვი (არჩევითი)"
          title="თარიღი"
        />
        <Input styles="md" label="ლეპტოპის ფასი" title="მხოლოდ ციფრები" />
        <Radio
          styles="md"
          id="ახალი"
          id2="მეორადი"
          title="ლეპტოპის მდგომარეობა"
        />
      </div>
      <div className={styles["box-style"]}>
        <Button
          title="უკან"
          styles="sm"
          onBtnClick={btnClickHandler}
          type="button"
        />
        <Button
          title="დამახსოვრება"
          styles="sm"
          type="submit"
          onBtnClick={submitClickHandler}
        />
      </div>
    </Fragment>
  );
};

export default Laptop;
