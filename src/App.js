import Header from './components/layout/header/Header.js'
import Footer from './components/layout/footer/Footer.js'
import Home from './components/home/Home.js'
import ProductDetail from './components/product/ProductDetail'
import './App.css';
import Products from './components/product/Products.js'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import React from 'react';
import Search from './components/product/Search.js';
import LoginSignup from './components/user/LoginSignup.js';
import { loadUser} from './actions/userAction.js';
import {useDispatch} from 'react-redux'
import UserOptions from './components/layout/header/UserOptions'
import {useSelector} from 'react-redux'
import Profile from './components/user/Profile'
function App() {
  const dispatch=useDispatch()
  const {isAuthenciate, user} =useSelector(state=>state.user)
  React.useEffect(()=>{
    dispatch(loadUser())
    
  },[dispatch])

  return (
    <Router>

      <Header/>
      {isAuthenciate && <UserOptions user={user} />}
      <Routes>

        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/product/:id' element={<ProductDetail/>}></Route>
        <Route exact path="/products" element={<Products/>}> </Route>
        <Route path="/products/:keyword" element={<Products/>}> </Route>
        <Route exact path='/search' element={<Search/>}></Route>
        <Route exact path='/login' element={<LoginSignup/>}></Route>
        {isAuthenciate && <Route exact path ='/account' element={<Profile/> }  ></Route>}
      </Routes>

      <Footer/>
      </Router>
  )
}

export default App;
