import Button from "../Button/Button";
import styles from "./MainPage.module.css";
import logo from "./../../source/LOGO-Redberry.png";
import MainPic from "./../../source/MainPic.png";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const onAddHandler = () => {
    navigate("/forms");
  };

  return (
    <div className={styles["main-page"]}>
      <img className={styles.logo} src={logo} alt="Redberry logo"></img>
      <img
        className={styles["main-pic"]}
        src={MainPic}
        alt="Coding pic with lap"
      ></img>
      <Button onClick={onAddHandler} title={"ჩანაწერის დამატება"} />
      <Button title={"ჩანაწერების სია"} />
    </div>
  );
};

export default MainPage;
