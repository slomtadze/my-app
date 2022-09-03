
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage'
import MainForm from './components/Forms/MainForm/MainForm';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/forms' element={<MainForm />}/>
      </Routes>
    </div>
  )
}

export default App;
