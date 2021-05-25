import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Index from './pages/Index/index'
import Second from './pages/Second/index'
import Footer from './pages/Footer/index'
function App(props:any) {


  return (
    <BrowserRouter>
        <div className='app'>
            <Index />
            <Second/>
            <Footer/>
        </div>


    </BrowserRouter>
  );
}

export default App  ;
