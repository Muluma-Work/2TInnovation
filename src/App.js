
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form from './components/Form/Form';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
