import styles from "./Radio.module.css";

const Radio = (props) => {
  return (
    <div className={styles[props.styles]}>
      <p>{props.title}</p>
      <div className={styles.default}>
        <input type="radio" id={props.id} />
        <label htmlFor={props.id}>{props.id.toUpperCase()}</label>
        <input type="radio" id2={props.id2} />
        <label>{props.id2.toUpperCase()}</label>
      </div>
    </div>
  );
};

export default Radio;
