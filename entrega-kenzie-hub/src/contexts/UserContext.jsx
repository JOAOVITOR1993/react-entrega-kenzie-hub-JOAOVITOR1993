import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createContext } from "react";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updateUser, setUpdateUser] = useState(null);

  const onSubmitFormLogin = async (data) => {
    try {
      const response = await api.post("sessions", data);
      const { token, user: userResp } = response.data;
      setUser(userResp);
      localStorage.setItem("@TOKEN", JSON.stringify(token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      toast.success("Login efetuado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha incorretos!");
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));
      if (!token) {
        setLoading(false);
        return null;
      }
      try {
        const response = await api.get("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        localStorage.clear();
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [updateUser]);

  const onSubmitFormRegister = async (data) => {
    try {
      const response = await api.post("users", data);
      toast.success("Conta criada com sucesso!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <UserContext.Provider
      value={{
        onSubmitFormLogin,
        navigate,
        user,
        setUser,
        loading,
        setLoading,
        onSubmitFormRegister,
        setUpdateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
