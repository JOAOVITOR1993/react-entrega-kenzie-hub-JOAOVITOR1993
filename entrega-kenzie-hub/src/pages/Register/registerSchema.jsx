import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup
    .string()
    .required("Nome obrigatório"),
    email: yup
    .string()
    .required("Email obrigatório")
    .email("E-mail inválido"),
    password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .matches(/(?=.*[A-Za-z])/, "Pelo menos uma letra")
    .matches(/(?=.*\d)/, "Pelo menos um número")
    .matches(/(?=.*[@$!%*?&])/, "Pelo menos um caractere especial"),
    passwordConfirm: yup
    .string()
    .required("A confirmação de senha é obrigatória")
    .oneOf([yup.ref("password")], "Senha incorreta"),
    bio: yup
    .string()
    .required("Bio obrigatória"),
    contact: yup
    .string()
    .required("Contato obrigatório"),
    course_module: yup
    .string()
    .required("Módulo obrigatório")
  })