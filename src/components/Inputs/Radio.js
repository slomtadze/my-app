import styles from "./Radio.module.css";

const Radio = (props) => {
  return (
    <div className={styles[props.styles]}>
      <label htmlFor={props.id}>{props.name}</label>
      <div className="default">
        <input type="radio" id={props.id}></input>
        <input type="radio" id={props.id}></input>
      </div>
    </div>
  );
};

export default Radio;
