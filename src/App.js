import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import MainPage from "./components/MainPage/MainPage";
import MainForm from "./components/Forms/MainForm/MainForm";
import List from "./components/Forms/List/List";

function App() {
  return (
    <div className={styles.css}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/forms" element={<MainForm />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
