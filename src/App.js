import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import AddressBar from './components/addressBar';
import NavbarCustom from './components/navbar';
import Carrer from './pages/carrer';
import Token from './pages/token';
import User from './pages/users';
import Partners from './pages/partners';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <NavbarCustom/>
      <Token/>
      <AddressBar/>
      <Footer/>
    </div>
  );
}

export default App;
