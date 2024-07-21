import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

// Page components
import Register from "./components/page/auth/Register";
import Login from "./components/page/auth/Login";
import Home from "./components/page/Home";
// Admin components
import HomeAdmin from "./components/page/admin/Home";
// User components
import HomeUser from "./components/page/user/Home";
// Layout components
import Navbar from "./components/layout/Navbar";
// Function
import { currentUser } from "./components/function/auth";
// Routes
import UserRoute from "./components/routes/UserRoute"; 
import AdminRoute from "./components/routes/AdminRouth"; 

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const idtoken = localStorage.getItem('token');
    if (idtoken) {
      currentUser(idtoken)
        .then((res) => {
          console.log(res.data);
          dispatch({
            type: 'LOGIN',
            payload: {
              token: idtoken,
              username: res.data.username,
              role: res.data.role,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin/index"
          element={
            <AdminRoute>
              <HomeAdmin />
            </AdminRoute>
          }
        />
        <Route
          path="/user/index"
          element={
            <UserRoute>
              <HomeUser />
            </UserRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
