import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Employee from './components/BasicForms/EmployeeForm/Employee';
import MainForm from './components/BasicForms/MainForm/MainForm';
import MainPage from './components/MainPage/MainPage';


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
