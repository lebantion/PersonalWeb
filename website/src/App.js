import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./NavBar";
import Footer from "./Footer";

import Homepage from "./pages/Home/home";
import Diplomapage from "./pages/Diploma/diploma";
import Projectpage from "./pages/Projects/project";
import Contactpage from "./pages/Contact/contact";

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/Projects' element={<Projectpage />}/>
        <Route path='/Diploma' element={<Diplomapage />}/>
        <Route path='/Contact' element={<Contactpage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// <Route path='/Resume' element={<Resumepage />}/>