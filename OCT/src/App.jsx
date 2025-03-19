import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskLoop from './pages/TaskLoop';
import Login from './pages/Login'; // Import Login component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskLoop />} />
      <Route path="/login" element={<Login />} /> {/* Added route for Login */}
    </Routes>
  );
};

export default App;