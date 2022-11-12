import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
export const userdetails=React.createContext()

function App() {
  return (
    <div>
      <Signup></Signup>
    
    </div>
  )
}

export default App;
