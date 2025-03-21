import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskLoop from './pages/TaskLoop';
import Login from './pages/Login'; // Import Login component
import Register from './pages/Register'; // Import Register component
import Forgot_password from './pages/Forgot_password'; // Import Forgot_password component
import Leaderboard from './pages/Leaderboard';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskLoop />} />
      <Route path="/login" element={<Login />} /> {/* Added route for Login */}
      <Route path="/register" element={<Register />} /> 
      <Route path="/forgot-password" element={<Forgot_password />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
};

export default App;