import { AddModal } from "..";
import { Input } from "../../Input";
import { Label } from "../../Label";
import { Button } from "../../Button";
import { modalUpdateTechSchema } from "./modalUpdateTechSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";

export const ModalUpdateTech = () => {
  const {
    setOpenModalUpdateTech,
    onSubmitFormUpdateTech,
    titleUpdate,
    statusUpdate,
    deleteTechnology,
    idTechUpdate,
  } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(modalUpdateTechSchema),
  });

  return (
    <AddModal
      titleModal={"Tecnologia Detalhes"}
      onClick={() => setOpenModalUpdateTech(false)}
    >
      <form onSubmit={handleSubmit(onSubmitFormUpdateTech)}>
        <Input
          type={"text"}
          id={"title"}
          textLabel={"Nome do projeto"}
          defaultValue={titleUpdate}
          disabled={true}
        />

        <Label htmlFor={"status"} textLabel={"Selecionar status"} />
        <select {...register("status")} id="status" defaultValue={statusUpdate}>
          <option value="">Selecione o status</option>
          <option>Iniciante</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </select>
        {errors.status && <p className="pError">{errors.status.message}</p>}
        <div>
          <Button type={"submit"} name={"Salvar alterações"} />
          <Button
            type={"button"}
            name={"Excluir"}
            onClick={() => deleteTechnology(idTechUpdate)}
          />
        </div>
      </form>
    </AddModal>
  );
};
