import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskLoop from './pages/TaskLoop';
import Login from './pages/Login'; // Import Login component
import Register from './pages/Register'; // Import Register component
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskLoop />} />
      <Route path="/login" element={<Login />} /> {/* Added route for Login */}
      <Route path="/register" element={<Register />} /> 
    </Routes>
  );
};

export default App;