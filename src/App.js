
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { auth } from './firebase_setup/firebase';
// import {useAuthState} from 'react-firebase-hooks/auth';

import Form from './components/Form';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  // const [user] = useAuthState(auth);
  return (

    // signin flow
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>

    // <>
    //    <Login />
    // </>

  // signin flow


    // user ? <Form /> : <Login/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Form />} />
    //     <Route path='/login' element={<Login />} />
    //     <Route path='/register' element={<Register />} />
    //   </Routes>
    // </BrowserRouter>
   

  );
}

export default App;
