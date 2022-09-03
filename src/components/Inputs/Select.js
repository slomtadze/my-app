import "./Select.css";

const Select = (props) => {
  const options = props.array.map((item) => {
    return <option value={item}>{item}</option>;
  });

  return (
    <div className={props.styles}>
      <label htmlFor={props.id}>{props.label}</label>
      <select id={props.id} name={props.name}>
        <option selected disabled>
          {props.name}
        </option>
        {options}
      </select>
      <span>{props.title}</span>
    </div>
  );
};

export default Select;