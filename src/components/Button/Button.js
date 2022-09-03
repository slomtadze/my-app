import styles from "./Button.module.css";

const Button = (props) => {
  const onClickHandler = () => {
    props.onClick();
  };

  return (
    <button onClick={onClickHandler} className={styles[props.styles]}>
      {props.title}
    </button>
  );
};

export default Button;
