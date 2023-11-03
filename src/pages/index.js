import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";
import PrincipalImg from "../components/Principal-Img";
import Footer from "../components/Footer";
import Movies from "../components/Movies";
import pageCliente from "./pageClient";


export default function App() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="App">
      <Header />
      <PrincipalImg/>
      <Movies/>
      <Footer/>
      {isLoggedIn ? <LoggedInText /> : <LoggedOutText />}
    </div>
  );
}

const LoggedInText = () => {
  const { account } = useAuth();

  return (
    <div>
      <pageCliente/>
      <h2>
      home autenticado {account.username}
    </h2>
    </div>
    
  );
};

const LoggedOutText = () => (
  
  <h2>
    home Sin autenticarse
  </h2>
  
);


