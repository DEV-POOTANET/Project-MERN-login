//rafce
import React , { useState } from 'react';

//function
import { register } from '../../function/auth';

const Register = () => {
    const [ value , setValue] = useState({
        username : "",
        password : "",
        password1 : ""
    })

    const handleChange = (e) =>{
        
        setValue({
          ...value,
          [e.target.name] : e.target.value,
      })
    }

    const handleSubmit =(e) =>{
      e.preventDefault()
      console.log(value)
      if(value.password !== value.password1){
        alert("Password not match")
      }else{
        register(value)
        .then(res =>{
          console.log(res)
          alert(res.data)
        }).catch(err =>{
          console.log(err.response.data)
          alert(err.response.data)
        })
      }
    }

  return (
    <div>
      <h1>Register page</h1>
      <form onSubmit={handleSubmit}>

        <label>Username</label>
        <input type='text' name='username' onChange={handleChange} />

        <label>Password</label>
        <input type='text' name='password' onChange={handleChange} />

        <label>Comfirm Password</label>
        <input type='text' name='password1' onChange={handleChange} />

        <button type='submit' disabled={value.password.length < 6  } >Submit</button>

      </form>
    </div>
  );
}

export default Register;
