import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export const TechContext = createContext({});

export const TechProvider = () => {
  const { user, setUpdateUser } = useContext(UserContext);
  const [openModalCreateTech, setOpenModalCreateTech] = useState(false);
  const [openModalUpdateTech, setOpenModalUpdateTech] = useState(false);
  const [titleUpdate, setTitleUpdate] = useState("");
  const [statusUpdate, setStatusUpdate] = useState("");
  const [idTechUpdate, setIdTechUpdate] = useState("");

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
      setOpenModalUpdateTech(false);
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado!");
    }
  };

  const setDefaultValuesUpdateTech = (idTech) => {
    user.techs.find((element) => {
      if (element.id === idTech) {
        setTitleUpdate(element.title);
        setStatusUpdate(element.status);
        setIdTechUpdate(idTech);
      }
    });
    setOpenModalUpdateTech(true);
  };

  const onSubmitFormUpdateTech = async (data) => {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));

    try {
      const response = await api.put(`users/techs/${idTechUpdate}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia atualizada com sucesso!");
      setUpdateUser(response);
      setOpenModalUpdateTech(false);
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
        openModalUpdateTech,
        setOpenModalUpdateTech,
        onSubmitFormUpdateTech,
        titleUpdate,
        setTitleUpdate,
        statusUpdate,
        setStatusUpdate,
        setDefaultValuesUpdateTech,
        idTechUpdate,
      }}
    >
      <Outlet />
    </TechContext.Provider>
  );
};
