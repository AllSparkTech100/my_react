// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Contact from "./components/Pages/Contact";
// import Services from "./components/Pages/Services";
import ErrorPage from './components/Pages/Error';
import Login from './components/Pages/Login/Login';
import NavComp from './components/Pages/Nav/Nav';
import SignUp from './components/Pages/Sign Up/SignUp';
import Settings from "../src/components/Pages/Account/AccountSet"



function App () {
  return (
    <div className="App">
      <NavComp />
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;