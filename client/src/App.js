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

import { Routes,Route } from "react-router-dom";

function App() {
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
