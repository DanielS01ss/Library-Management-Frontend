import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import LandingPage from "./Components/LandingPage";
import AllBooks from "./Components/AllBooks.js";
import Login from "./Components/Login.js";
import SignUp from "./Components/SignUp";
import { Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/borrow-section" element={<AllBooks/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
