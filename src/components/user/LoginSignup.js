import React ,{useRef, useState, Fragment, useEffect} from 'react'
import './LoginSignup.css'
import Loader from '../layout/loader/Loader'
import {Link} from 'react-router-dom'
import  MailOutlineIcon  from '@material-ui/icons/MailOutline'
import LockOpenIcon  from '@material-ui/icons/LockOpen'
import FaceIcon from '@material-ui/icons/Face'
import {useDispatch, useSelector} from 'react-redux'
import {clearErrors, login} from '../../actions/userAction'
import {useAlert} from 'react-alert'
import {useNavigate} from 'react-router-dom'
function LoginSignup() {
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const alert=useAlert()
    const loginTab=useRef(null)
    const registerTab=useRef(null)
    const switcherTab=useRef(null)
    const {error,loading, isAuthenciate} =useSelector(state=>state.user)
    const [loginEmail, setLoginEmail]=useState("")
    const [loginPassword, setLoginPassword]=useState("")
    useEffect(()=>{
        if(error){
            alert.error(error)
            dispatch(clearErrors)
        }
        if(isAuthenciate)
        {
            navigate('/account')
        }

    },[error, dispatch])
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })
    const [avatar, setAvatar]=useState("")
    const [avatarPreview, setAvatarPreview]=useState('/Profile.jpg')
    const {name, email,password}= user
    
    const loginSubmit=(e)=>{
        e.preventDefault()

        dispatch(login(loginEmail,loginPassword))
    }
    const registerSubmit=(e)=>{
        e.preventDefault()
        const myFrom= new FormData()
        myFrom.set("name",name)
        myFrom.set("email",email)
        myFrom.set("password",password)
        myFrom.set("avatar",avatar)
        console.log("regestered")
    }
    const registerDataChange=(e)=>{
        if(e.target.name==='avatar')
        {
            const reader= new FileReader();
            reader.onload=()=>{
                if(reader.readyState===2)
            {
                setAvatarPreview(reader.result);
                setAvatar(reader.result)
            }
            }
            reader.readAsDataURL(e.target.files[0])

        }
        else{
            setUser({...user,[e.target.name]:e.target.value})
        }

    }
    const switchTabs=(e,tab)=>{
        if(tab==="login")
        {
            switcherTab.current.classList.add("shiftToNetural")
            switcherTab.current.classList.remove("shiftToRight")
            registerTab.current.classList.remove("shiftToNeturalFrom")
            loginTab.current.classList.remove("shiftToLeft")
            
        }
        if(tab==="register")
        {
            switcherTab.current.classList.add("shiftToRight")
            switcherTab.current.classList.remove("shiftToNetural")

            registerTab.current.classList.add("shiftToNeturalFrom")
            loginTab.current.classList.add("shiftToLeft")



        }


    }


  return (
    <Fragment>
      {loading?<Loader/>:
      
      <div className="loginSignupContainer">
      <div className="loginBox">
          <div>

          <div className="login-toggle">
              <p onClick={(e)=>switchTabs(e,"login")} >LOGIN</p>
              <p onClick={(e)=>switchTabs(e,"register")} >REGISTER</p>


          </div>
          <button ref={switcherTab}></button>
          </div>
          <form className='loginForm' ref={loginTab} onSubmit={loginSubmit}>
              <div className="loginEmail">
                  <MailOutlineIcon/>
                  <input type="email" name="mail" placeholder='Email' required value={loginEmail} onChange={(e)=>setLoginEmail(e.target.value)} />

              </div>
              <div className="loginPAssword">
                  <LockOpenIcon/>
              <input type="password" name="password" placeholder='Password' required value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)} />

              </div>
              <Link to="/password/forget">Forget Password ?</Link>
              <input type="submit" value={"Login"} className="loginBtn" />

          </form>
          <form  className="signUpForm" ref={registerTab} encType="multipart/form-data" onSubmit={registerSubmit}>
             <div className="signUpName">
                  <FaceIcon/>
                  <input type="text" name="name" placeholder='Name' required value={name} onChange={registerDataChange} />

              </div> 
              <div className='signUpEmail'>
                  <MailOutlineIcon/>
                  <input type="email" name="email" placeholder='Email' required value={email} onChange={registerDataChange} />

              </div>
              <div className="signUpPassword">
                  <LockOpenIcon/>
                  <input type="password" name="password" placeholder='Password' required value={password} onChange={registerDataChange} />


              </div>
              <div className="registerImage">
                  <img src={avatarPreview} alt="Avtar Preview" />
                  <input type="file" name="avatar" accept='image/*' onChange={registerDataChange} />
              </div>
              <input className='signUpBtn' type="submit" value={"register"} />




          </form>

      </div>
  </div>}
      
    </Fragment>
  )
}

export default LoginSignup
