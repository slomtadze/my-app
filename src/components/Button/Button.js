import "./Button.css";


const Button = (props) => {
  return <button className="button-md">{props.title}</button>;
};

export default Button;