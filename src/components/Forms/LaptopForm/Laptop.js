import { Fragment } from "react";
import Input from "../../Input";
import Radio from "../../Radio";
import Select from "../../Select";

const Laptop = (props) => {
  return (
    <Fragment>
      <div className="box-style">
        <Input
          styles="md"
          label="ლეპტოპის სახელი"
          title="ლათინური სიმბოლოები"
        />
        <Select array={[]} styles="md" />
      </div>
      <div className="box-style-wrap">
        <Select styles="sm" array={[]} />
        <Input styles="sm" />
        <Input styles="sm" />
        <Input styles="md" />
        <Radio styles="radio" />
      </div>
    </Fragment>
  );
};

export default Laptop;