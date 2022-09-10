import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div>
      <footer id='footer'>
        <div className="leftFooter">
            <h4>Download our app</h4>
            <p>download app for Android and Ios Mobile phones</p>
            <img src="" alt="Playstore" />
            <img src="" alt="AppStore" />

        </div>
        <div className="midFooter">
            <h1>ECommerce App</h1>
            <p>Hight Quality is our first periority</p>
            <p>Copyright 2022 &copy; Adnan Sadiq </p>
        </div>
        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="/">Instagram</a>
            <a href="/">Youtube</a>
            <a href="/">Facebook</a>
        </div>

      </footer>
    </div>
  )
}
