import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { loginSchema } from "./loginSchema";
import { Form } from "../../components/Form";
import { StyleLogin } from "./styles";
import logo from "../../img/Logo.svg";

export const Login = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmitForm = async (data) => {
    try {
      const response = await api.post("sessions", data);
      toast.success("Login efetuado com sucesso!");
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };


  return (
    <StyleLogin>
      <header>
        <figure>
          <img src={logo} alt="Logo" />
        </figure>
      </header>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <h2>Login</h2>

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

        <Button type={"submit"} name={"Entrar"} />

        <p>Ainda não possui uma conta?</p>

        <Button
          type={"button"}
          onClick={() => navigate("/register")}
          name={"Cadastre-se"}
        />
      </Form>
    </StyleLogin>
  );
};
