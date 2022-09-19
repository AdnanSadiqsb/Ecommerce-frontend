import Header from './components/layout/header/Header.js'
import Footer from './components/layout/footer/Footer.js'
import Home from './components/home/Home.js'
import ProductDetail from './components/product/ProductDetail'
import './App.css';

import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import React from 'react';

function App() {

  return (
    <Router>

      <Header/>
      <Routes>

        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/product/:id' element={<ProductDetail/>}></Route>

      </Routes>
      <Footer/>
      </Router>
  )
}

export default App;
