import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter className="App">
      {/* <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}

      <Routes />
    </BrowserRouter>
  );
}

export default App;
