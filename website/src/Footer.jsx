import React from "react";
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import osulogo from './assets/osulogo.png';
import insta from './assets/Instagram.png';
import github from './assets/Github.png';
import linkedin from './assets/LinkedIn.png';
import Facebook from './assets/Facebook.png';

const Footer = () => 
<footer className="font-small blue pt-4">
    <div className="text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-0 text-uppercase">
                <h3> The Ohio State Univesity <img src={osulogo} width="40" height="30" className="d-inline-block align-top" ></img></h3>
                <div> SeongRok Ha (Simon) </div>
                <h6> Computer Science and Engineering </h6>
                <h5> CopyRight : Lahel97@gmail.com </h5>
            </div>
            <div className="col-md-6 mb-md-0 mb-3 fixed-right">
                <h4 className="text-uppercase">Links</h4>
                <li className="list-unstyled" margin>
                    <a href="https://www.instagram.com/n0w1s_/" target="_blank"><img src={insta} width="30" height="30"></img></a>
                    <a href="https://github.com/lebantion" target="_blank"><img src={github} width="30" height="30"></img></a>
                    <a href="https://www.linkedin.com/in/seongrok-ha-4b59281b5/F" target="_blank"><img src={linkedin} width="30" height="30"></img></a>
                    <a href="https://www.facebook.com/profile.php?id=100003394398836" target="_blank"><img src={Facebook} width="30" height="30"></img></a>
                </li>
            </div>
        </div>
    </div>
</footer>

export default Footer

//"navbar fixed-bottom navbar-expand-lg navbar-dark"