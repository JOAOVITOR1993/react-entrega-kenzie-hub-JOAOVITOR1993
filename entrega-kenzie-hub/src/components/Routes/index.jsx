import { Route, Routes } from "react-router-dom";
import { TechProvider } from "../../contexts/TechContext";
import { DashBoard } from "../../pages/Dashboard";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<TechProvider />}>
        <Route path="/dashboard" element={<DashBoard />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
