import { modalCreateTechSchema } from "./modalCreateTechSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddModal } from "..";
import { Input } from "../../Input";
import { Label } from "../../Label";
import { Button } from "../../Button";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";

export const ModalCreateTech = () => {
  const { onSubmitFormCreateTech, setOpenModalCreateTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(modalCreateTechSchema),
  });

  return (
    <AddModal
      titleModal={"Cadastrar Tecnologia"}
      onClick={() => setOpenModalCreateTech(false)}
    >
      <form onSubmit={handleSubmit(onSubmitFormCreateTech)}>
        <Input
          type={"text"}
          placeholder={"Digite aqui a Tecnologia"}
          id={"title"}
          textLabel={"Nome"}
          register={register("title")}
        />
        {errors.title && <p className="pError">{errors.title.message}</p>}

        <Label htmlFor={"status"} textLabel={"Selecionar status"} />
        <select {...register("status")} id="status">
          <option value="">Selecione o status</option>
          <option>Iniciante</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </select>
        {errors.status && <p className="pError">{errors.status.message}</p>}
        <Button type={"submit"} name={"Cadastrar Tecnologia"} />
      </form>
    </AddModal>
  );
};
