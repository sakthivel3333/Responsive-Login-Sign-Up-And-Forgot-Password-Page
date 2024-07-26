import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Home from './Home';
import SignUp from './signup';
import ForgotPassword from './forgot';
 
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot" element={<ForgotPassword />} />
    </Routes>
  );
};

export default App;


