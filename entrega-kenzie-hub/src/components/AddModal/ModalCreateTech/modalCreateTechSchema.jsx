import * as yup from "yup";

export const modalCreateTechSchema = yup.object().shape({
  title: yup
    .string()
    .required("Nome obrigatório"),
  status: yup 
    .string()
    .required("Status obrigatório"),
  })