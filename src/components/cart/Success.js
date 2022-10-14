import React from 'react'
import './success.css'
import successImg from '../../images/success.gif'
function Success() {
  return (
    <div className='success-cont'>
        <div className="succcess-img">
            <img src={successImg} alt="" />
        </div>
        <button className='succes-btn'> view Order</button>
      
    </div>
  )
}

export default Success
