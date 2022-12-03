import { StyledDashBoard } from "./styles";
import { Header } from "../../components/Header";

export const DashBoard = ({ user }) => {

  const logout = () => {
    localStorage.clear()
  }

  return (
    <StyledDashBoard>
        <Header to={"/login"} onClick={()=> logout()} name={"Sair"}/>
      <section>
        <div className="container">
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </div>
      </section>
      <div className="container">
        <h3>Que pena! Estamos em desenvolvimento :</h3>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </StyledDashBoard>
  );
};
