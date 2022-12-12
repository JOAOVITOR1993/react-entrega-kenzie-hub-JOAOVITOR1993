import * as yup from "yup";

export const modalUpdateTechSchema = yup.object().shape({
  status: yup 
    .string()
    .required("Status obrigatório"),
  })