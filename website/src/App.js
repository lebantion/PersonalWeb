import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./NavBar";

import Homepage from "./pages/Home/home";
import Diplomapage from "./pages/Diploma/diploma";
import Resumepage from "./pages/Resume/resume";
import Projectpage from "./pages/Projects/project";
import AboutMe from "./pages/About/about";

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/About' element={<AboutMe />}/>
        <Route path='/Resume' element={<Resumepage />}/>
        <Route path='/Projects' element={<Projectpage />}/>
        <Route path='/Diploma' element={<Diplomapage />}/>
      </Routes>
    </Router>
  );
}

export default App;
