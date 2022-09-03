import styles from "./Select.module.css";

const Select = (props) => {
  const options = props.array.map((item) => {
    return (
      <option key={props.array.indexOf(item)} value={item}>
        {item}
      </option>
    );
  });

  return (
    <div className={styles[props.styles]}>
      <label htmlFor={props.id}>{props.label}</label>
      <select id={props.id} name={props.name}>
        <option defaultValue={props.name}>{props.name}</option>
        {options}
      </select>
      <span>{props.title}</span>
    </div>
  );
};

export default Select;
