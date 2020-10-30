import React from 'react';
import Navbar from "./components/navbar";
import Home from "./components/home";
import Cart from "./components/cart";
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <Navbar/> 
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      </Switch>
     </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
