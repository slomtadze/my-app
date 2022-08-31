import Button from "../Button/Button";
import "./MainPage.css";
import logo from './../../source/LOGO-Redberry.png'
import MainPic from './../../source/MainPic.png'

const MainPage = () => {
  return (
    <div className="main-page">
      <img className="logo" src={logo} alt='Redberry logo'></img>
      <img className="main-pic" src={MainPic} alt='Coding pic with lap'></img>
      <Button title={"ჩანაწერის დამატება"} />
      <Button title={"ჩანაწერების სია"} />
    </div>
  );
};

export default MainPage;