import "./Radio.css";

const Radio = (props) => {
  return (
    <div styles={props.styles}>
      <label htmlFor={props.id}></label>
      <input type="radio" id={props.id}></input>
      <input type="radio" id={props.id}></input>
    </div>
  );
};

export default Radio;