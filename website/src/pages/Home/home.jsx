import React from 'react';
import './home.css';

import Carousel from 'react-bootstrap/Carousel';
import SoftDev from '../../assets/Softdev.jpg';
import AppDev from '../../assets/Appdev.webp';
import FullStack from '../../assets/FullStack.jpg';
import selfie from '../../assets/Selfie.jpeg';
import osulogo from '../../assets/osulogo.png';

import Clogo from '../../assets/C.png';
import CPPlogo from '../../assets/C++.png';
import Csharplogo from '../../assets/Csharp.png';
import Javalogo from '../../assets/Java.png';
import Kotlinlogo from '../../assets/Kotlin.png';
import Rubylogo from '../../assets/Ruby.png';
import Pythonlogo from '../../assets/Python.png';
import Htmllogo from '../../assets/HtmlJsCss.png';

import Eclipselogo from '../../assets/Eclipse.png';
import Firelogo from '../../assets/Firebase.png';
import Rubyminelogo from '../../assets/Rubymine.png';
import Unitylogo from '../../assets/HtmlJsCss.png';
import Unixlogo from '../../assets/UNIX.png';
import Vslogo from '../../assets/VSCode.png';
import Windowlogo from '../../assets/Window.png';
import Gitlogo from '../../assets/Git.png';

//Developing with Carousels (Bootstrap)
const home = () => {
    return (
        <div>
            <h1></h1>
            <Carousel fade>
                <Carousel.Item> <img className="d-block w-100" alt="First slide" src={SoftDev}/>
                    <Carousel.Caption>
                        <h3>Software Engineer</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item> <img className="d-block w-100" alt="First slide" src={AppDev}/>
                    <Carousel.Caption>
                        <h3>Mobile Application Developer</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item> <img className="d-block w-100" alt="First slide" src={FullStack}/>
                    <Carousel.Caption>
                        <h3>Full-Stack Developoer</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h1> About Me </h1>
            <div className="About text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-0">
                        <h3 className="name"> SeongRok Ha (Simon) Ha</h3>
                        <h3 className="school"> The Ohio State University <img src={osulogo} width="90" height="60"></img></h3>
                        <img src={selfie} className="selfie d-inline-block align-center" ></img>
                    </div>
                    <div className="col-md-6 mb-md-0 mb-3 fixed-right">
                        <h4 className="Intro text-uppercase">Intro.</h4>
                        <p className="Intro align-center">My name is SeongRok Ha (Simon) who have been studying Computer Science and Enginnering (Software Development Specializing)
                            in the United States. I am from South Korea and interested in Software Development. This website is using React, JavaScript, BootStrap and HTML/CSS</p>
                    </div>
                </div>
            </div>
            <h1> Language </h1>
            <div className="row">
                <div className="col-md-3 mb-md-0 mb-3 ">
                    <img src={Clogo} className="logo d-inline-block align-center" ></img>
                    <img src={CPPlogo} className="logo d-inline-block align-center" ></img>
                </div>
                <div className="col-md-3 mb-md-0 mb-3 ">
                    <img src={Rubyminelogo} className="logo d-inline-block align-center" ></img>
                    <img src={Unitylogo} className="logo d-inline-block align-center" ></img>
                </div>
                <div className="col-md-3 mb-md-0 mb-3 ">
                    <img src={Unixlogo} className="logo d-inline-block align-center" ></img>
                    <img src={Vslogo} className="logo d-inline-block align-center" ></img>
                </div>
                <div className="col-md-3 mb-md-0 mb-3 ">
                    <img src={Csharplogo} className="logo d-inline-block align-center" ></img>
                    <img src={Htmllogo} className="logo d-inline-block align-center" ></img>
                </div>
            </div>

            <h1> Tools </h1>
            <div className="row">
                <div className="col-md-3 mb-md-0 mb-3 ">
                    <img src={Eclipselogo} className="logo d-inline-block align-center" ></img>
                    <img src={Firelogo} className="logo d-inline-block align-center" ></img>
                </div>
                <div className="col-md-3 mb-md-0 mb-3 ">
                    <img src={Javalogo} className="logo d-inline-block align-center" ></img>
                    <img src={Kotlinlogo} className="logo d-inline-block align-center" ></img>
                </div>
                <div className="col-md-3 mb-md-0 mb-3 ">
                    <img src={Pythonlogo} className="logo d-inline-block align-center" ></img>
                    <img src={Rubylogo} className="logo d-inline-block align-center" ></img>
                </div>
                <div className="col-md-3 mb-md-0 mb-3 ">
                    <img src={Windowlogo} className="logo d-inline-block align-center" ></img>
                    <img src={Gitlogo} className="logo d-inline-block align-center" ></img>
                </div>
            </div>
        
        </div>
      );
}

export default home;