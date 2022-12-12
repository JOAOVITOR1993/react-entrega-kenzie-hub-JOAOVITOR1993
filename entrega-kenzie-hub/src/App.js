import { RoutesMain } from "./components/Routes";
import { UserProvider } from "./contexts/UserContext";


const App = () => {
  return (
    <UserProvider>
      <RoutesMain/>
    </UserProvider>
  );
};

export default App;
