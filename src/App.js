import logo from './logo.svg';
import './App.css';
import Introduction from './Components/Introduction';
import NavBar from './Components/NavBar';
import Origin from './Components/Origin';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import SocialFollow from "./Components/SocialFollow";


function App() {
  return (
    <>
    <NavBar/>
    <Introduction/>
    <Origin/>
    <Projects/>
    <Footer/>
    <SocialFollow/>
    </>
  );
}

export default App;
