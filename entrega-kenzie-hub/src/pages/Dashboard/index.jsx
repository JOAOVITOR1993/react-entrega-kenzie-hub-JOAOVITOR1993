import { LoadingH1, StyledDashBoard } from "./styles";
import { Header } from "../../components/Header";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TechContext } from "../../contexts/TechContext";
import { ModalCreateTech } from "../../components/AddModal/ModalCreateTech";
import { ModalUpdateTech } from "../../components/AddModal/ModalUpdateTech";

export const DashBoard = () => {
  const { user, loading } = useContext(UserContext);
  const {
    openModalCreateTech,
    setOpenModalCreateTech,
    openModalUpdateTech,
    setDefaultValuesUpdateTech,
  } = useContext(TechContext);

  const logout = () => {
    localStorage.clear();
  };

  if (loading) {
    return <LoadingH1>Carregando...</LoadingH1>;
  }

  return user ? (
    <StyledDashBoard>
      <Header to={"/login"} onClick={() => logout()} name={"Sair"} />
      <section>
        <div className="container">
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </div>
      </section>
      <section className="container">
        <div>
          <h3>Tecnologias</h3>
          <Button
            type={"button"}
            onClick={() => setOpenModalCreateTech(true)}
            name={"+"}
          />
        </div>
        <ul>
          {user.techs.map((element) => {
            const { id, title, status } = element;
            return (
              <li key={id} onClick={() => setDefaultValuesUpdateTech(id)}>
                <h4>{title}</h4>
                <div>
                  <p>{status}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      {openModalCreateTech && <ModalCreateTech />}
      {openModalUpdateTech && <ModalUpdateTech />}
    </StyledDashBoard>
  ) : (
    <Navigate to={"/login"} />
  );
};
