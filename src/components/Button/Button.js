import styles from "./Button.module.css";

const Button = (props) => {
  const onClickHandler = () => {
    props.onBtnClick();
  };

  return (
    <button
      onClick={onClickHandler}
      className={styles[props.styles]}
      type={props.type}
    >
      {props.title}
    </button>
  );
};

export default Button;
