import React , { useState } from 'react';

//function
import { login } from '../../function/auth';
// redux
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"



function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [ value , setValue] = useState({
    username : "",
    password : ""
  })
  
  const roleBaseRedirect= (role) =>{
    if(role === 'admin'){
      navigate("/admin/index")
    }else{
      navigate("/user/index")
    }
  }

  const handleChange = (e) =>{
          
    setValue({
      ...value,
      [e.target.name] : e.target.value,
  })
  }
  
  const handleSubmit =(e) =>{
    e.preventDefault()
    //console.log(value)

      login(value)
      .then(res =>{
        //console.log(res)
        alert(res.data)

        dispatch({
          type:'LOGIN',
          payload:{
            token: res.data.token,
            username : res.data.payload.user.username,
            role : res.data.payload.user.role,
          }
        })

        localStorage.setItem('token',res.data.token)

        roleBaseRedirect(res.data.payload.user.role)
      }).catch(err =>{
        console.log(err.response.data)
        alert(err.response.data)
      })
  }

  return (
    <div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>

      <label>Username</label>
      <input type='text' name='username' onChange={handleChange} />

      <label>Password</label>
      <input type='text' name='password' onChange={handleChange} />     

      <button type='submit' disabled={value.password.length < 6  } >Submit</button>

    </form>
  </div>
  );
}

export default Login;
