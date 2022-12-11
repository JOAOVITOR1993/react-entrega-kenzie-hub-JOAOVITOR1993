import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";
import { useState } from "react";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { setUpdateUser } = useContext(UserContext);
  const [openModalCreateTech, setOpenModalCreateTech] = useState(false);

  const onSubmitFormCreateTech = async (data) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));

    try {
      const response = await api.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia criada com sucesso!");
      setUpdateUser(response);
      setOpenModalCreateTech(false);
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado!");
    }
  };

  const deleteTechnology = async (id) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));

    try {
      const response = await api.delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia deletada com sucesso!");
      setUpdateUser(response);
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado!");
    }
  };

  return (
    <TechContext.Provider
      value={{
        onSubmitFormCreateTech,
        openModalCreateTech,
        setOpenModalCreateTech,
        deleteTechnology,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
