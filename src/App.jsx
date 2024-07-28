import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import "./App.css"

function App() {
  return (
    <div>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={ <p> Not Found Page </p> }/>
      </Routes>

    </div>
  )
}

export default App