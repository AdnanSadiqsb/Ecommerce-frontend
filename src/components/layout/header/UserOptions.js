import React from 'react'
import { Fragment } from 'react'
import { SpeedDial,SpeedDialAction } from '@mui/material';
import { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@material-ui/icons/Person'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ListAltIcon from '@material-ui/icons/ListAlt'
import { useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {logOut} from'../../../actions/userAction'
import {useAlert} from 'react-alert'
import Backdrop  from '@material-ui/core/Backdrop'
const UserOptions = (user) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const alert=useAlert()
    const options = [
      { icon: <PersonIcon />, name: 'account', fun:account },
        { icon: <ListAltIcon />, name: 'Orders', fun: orders },
        { icon: <ExitToAppIcon />, name: 'Exit', fun:logout },
      ];

      if(user.user.role==='admin')
      {
        options.unshift({icon: <DashboardIcon />, name: 'Dashboard', fun: dashboard  })
      }
      function dashboard() {
        navigate('/dashboard')
        
      }
      function orders() {
        navigate('/orders')
        
      }
      function account() {
        navigate('/account')
        
      }
      function logout() {
        dispatch(logOut())
        navigate('/')
        alert.success("logout succes fuly")

        
      }

    const [open, setOpen]=useState(false)
  return (
    <Fragment>
      <Backdrop open={open} style={{opacity:"0.8", zIndex:'10'}}/>
      <SpeedDial
      ariaLabel='SpeedDail tool tip'
      className='speedDail'
      onClose={()=>setOpen(false)}
        onOpen={()=>setOpen(true)}
        open={open}
        icon={
        <img className='speedDailIcon' src={user.user.avatar.url ? user.user.avatar.url:'./Profile.jpg' } alt='Profile pic'/>    
        }
        direction='down'
        >
          {
            options.map((option)=>{
             return <SpeedDialAction key={option.name} icon={option.icon} tooltipTitle= {option.name} onClick={option.fun} />

            })
          }

        </SpeedDial>
    </Fragment>
  )
}

export default UserOptions
