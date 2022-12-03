import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Label } from "../../components/Label";
import { registerSchema } from "./registerSchema";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { StyleRegister } from "./styles";

export const Register = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema)
  })


  const onSubmitForm = async (data) =>{
    try {
      const response = await api.post("users", data);
      toast.success("Conta criada com sucesso!")
      navigate("/login")
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado")
    }
  }

  return (
    <StyleRegister>
      <Header to={"/login"} name={"Voltar"}/>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>

        <Input 
        type={"text"} 
        placeholder={"Digite aqui seu nome"} 
        id={"name"}
        textLabel={"Nome"}
        register={register("name")}
        />
        {errors.name && <p className="pError">{errors.name.message}</p>}

        <Input 
        type={"email"} 
        placeholder={"Digite aqui seu email"} 
        id={"email"}
        textLabel={"Email"}
        register={register("email")}
        />
        {errors.email && <p className="pError">{errors.email.message}</p>}

        <Input 
        type={"password"} 
        placeholder={"Digite aqui sua senha"} 
        id={"password"}
        textLabel={"Senha"}
        register={register("password")}
        />
        {errors.password && <p className="pError">{errors.password.message}</p>}

        <Input 
        type={"password"} 
        placeholder={"Digite novamente sua senha"} 
        id={"passwordConfirm "}
        textLabel={"Confirmar Senha"}
        register={register("passwordConfirm")}
        />
        {errors.passwordConfirm && <p className="pError">{errors.passwordConfirm.message}</p>}

        <Input 
        type={"text"} 
        placeholder={"Fale sobre você"} 
        id={"bio"} 
        textLabel={"Bio"}
        register={register("bio")}
        />
        {errors.bio && <p className="pError">{errors.bio.message}</p>}

        <Input 
        type={"text"} 
        placeholder={"Opção de contato"} 
        id={"contact"} 
        textLabel={"Contato"}
        register={register("contact")}
        />
        {errors.contact && <p className="pError">{errors.contact.message}</p>}

        <Label htmlFor={"module"} textLabel={"Módulo"}/>
        <select {...register("course_module")} id="module">
            <option value="">Selecione o módulo</option>
            <option>Primeiro módulo (Introdução ao Frontend)</option>
            <option>Segundo módulo (Frontend Avançado)</option>
            <option>Terceiro módulo (Introdução ao Backend)</option>
            <option>Quarto módulo (Backend Avançado)</option>
        </select>
        {errors.course_module && <p className="pError">{errors.course_module.message}</p>}

        <Button type={"submit"} name={"Cadastrar"} />
      </Form>
    </StyleRegister>
  );
};
