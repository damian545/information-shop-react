import React from 'react';
import Navbar from "./components/navbar";
import Home from "./components/home";
import './App.css';
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Navbar/> 
     <Home/>
    </div>
    </Provider>
  );
}

export default App;
