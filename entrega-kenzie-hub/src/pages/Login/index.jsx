import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";
import { StyleLogin } from "./styles";
import logo from "../../img/Logo.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../Login/loginSchema";

export const Login = () => {
  const { 
    onSubmitFormLogin, 
    navigate
  } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  return (
    <StyleLogin>
      <header>
        <figure>
          <img src={logo} alt="Logo" />
        </figure>
      </header>
      <Form onSubmit={handleSubmit(onSubmitFormLogin)}>
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

        <Button className={"buttonPrimary"} type={"submit"} name={"Entrar"} />

        <p>Ainda não possui uma conta?</p>

        <Button
          className={"buttonGrey2 "}
          type={"button"}
          onClick={() => navigate("/register")}
          name={"Cadastre-se"}
        />
      </Form>
    </StyleLogin>
  );
};
