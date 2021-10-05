import { HashRouter,Router, BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import AddressBar from './components/addressBar';
import NavbarCustom from './components/navbar';
import Career from './pages/carrer';
import Token from './pages/token';
import User from './pages/users';
import Partners from './pages/partners';
import SignIn from './pages/sign_in';
import Home from './pages/home';
import SignUp from './pages/sign_up';
import Investors from './pages/investors';
import Teams from './pages/teams';
import MVP from './pages/mvp';
import Whitepaper from './pages/whitepaper';
import ContactForm from './pages/contact';
import About from './pages/about';


function App() {
  return (
    <div style={{height:"100%"}}>
      <HashRouter>
      <NavbarCustom/>
      <div style={{minHeight:"350px"}}>
        <Switch>
        <Route exact path='/'><Home/></Route>
          <Route path='/home'><Home/></Route>
          <Route path='/team'><Teams/></Route>
          <Route path='/about'><About/></Route>
          <Route path='/token'><Token/></Route>
          <Route path='/careers'><Career/></Route>
          <Route path='/whitepaper'><Whitepaper/></Route>
          <Route path='/investor'><Investors/></Route>
          <Route path='/partners'><Partners/></Route>
          <Route path='/users'><User/></Route>
          <Route path='/mvp'><MVP/></Route>
          <Route path='/signin'><SignIn/></Route>
          <Route path='/signup'><SignUp/></Route>
          <Route path="/contact"><ContactForm/></Route>
        </Switch>
        </div>
      </HashRouter>
      <AddressBar/>
      <Footer/>
    </div>
  );

}

export default App;
