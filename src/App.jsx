import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import Home from '../Pages/Home';

const App = () => {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
        </Routes>
      </div>
  );
};

export default App;