import React, {useEffect,useState} from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

const Header = () => {
  
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
  

      window.onscroll = () => {
        setStickyNav(window.pageYOffset === 0 ? false : true);
        
        return () => (window.onscroll = null);
      };
    
  }, []);
  return (
    <nav className={`navbar navbar-expand-lg bg-light navbar_bg ${stickyNav ? 'sticky' : ''}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">E-Commerce app </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Contact US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Services</a>
        </li>
    

      
      </ul>
      <form className="d-flex" role="search">
        <Link className='custom-icons' to={'/login'} ><i className="fa-solid fa-right-to-bracket"></i></Link>
        <Link className='custom-icons' to={'/'}><i className="fa-solid fa-cart-arrow-down"></i></Link>
        <Link className="custom-icons" to={'/Search'}><FaSearch/></Link>
      </form>
    </div>
  </div>
</nav>
  
  )
}

export default Header
