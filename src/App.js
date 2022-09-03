import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import MainPage from "./components/MainPage/MainPage";
import MainForm from "./components/Forms/MainForm/MainForm";

function App() {
  return (
    <div className={styles.css}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/forms" element={<MainForm />} />
      </Routes>
    </div>
  );
}

export default App;
