import { Routes, Route } from "react-router-dom";
import { TechProvider } from "./contexts/TechContext";
import { UserProvider } from "./contexts/UserContext";
import { DashBoard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

const App = () => {
  return (
    <UserProvider>
      <TechProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </TechProvider>
    </UserProvider>
  );
};

export default App;
