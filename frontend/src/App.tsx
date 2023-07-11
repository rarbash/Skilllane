import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CreateCourse from './component/CreateCourse';
import Home from './component/Home';
import Login from './component/Login';
import Profile from './component/Profile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="create-course" element={<CreateCourse />} />
        <Route path="profile" element={<Profile />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
