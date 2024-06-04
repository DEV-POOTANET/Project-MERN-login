import React,{useState,useEffect} from "react";
//page
import Register from "./components/page/auth/Register";
import Login from "./components/page/auth/Login";
import Home from "./components/page/Home";
//admin
import HomeAdmin from "./components/page/admin/Home"
//user
import HomeUser from "./components/page/user/Home"
//layout
import Navbar from "./components/layout/Navbar";
// function 
import { currentUser } from "./components/function/auth";
// redux
import { useDispatch } from "react-redux"

import { Routes,Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const idtoken = localStorage.token;
  if(idtoken){
    currentUser(idtoken)
    .then(res =>{
      console.log(res.data)

      dispatch({
        type:'LOGIN',
        payload:{
          token: idtoken,
          username : res.data.username,
          role : res.data.role,
        }
      })
      
    }).catch(err=> {
      console.log(err)
    })
  }


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/admin/index" element={<HomeAdmin/>}/>
        <Route path="/user/index" element={<HomeUser/>}/>


      </Routes>
    </div>
  );
}

export default App;
