import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { DashBoard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

const App = () => {
  const [user, setUser] = useState({})

  return (
    <Routes>
      <Route path="/login" element={ <Login user={user} setUser={setUser}/>}/>
      <Route path="/register" element={ <Register/> } />
      <Route path="/dashboard" element={ <DashBoard user={user}/> }/>
      <Route path="*" element={ <Login/>}/>
    </Routes>
  );
}

export default App;