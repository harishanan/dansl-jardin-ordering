import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
// import main_logo from './logo-image/01_Logo-principal.png';
import main_logo2 from "./logo-image/01_logo-horizontal - Copy.png";
import "./Navbar.css"


class Navbar extends Component {

    render() {

      function active(){
        var x = document.getElementById("home")
        x.style.color = "red";
        document.getElementById("faq").style.color = "white";
        document.getElementById("info").style.color = "white";
        document.getElementById("about").style.color = "white";

    }
      function active2(){
        var x = document.getElementById("faq")
        x.style.color = "red";
        document.getElementById("home").style.color = "white";
        document.getElementById("info").style.color = "white";
        document.getElementById("about").style.color = "white";

    }
      function active3(){
        var x = document.getElementById("info")
        x.style.color = "red";
        document.getElementById("home").style.color = "white";
        document.getElementById("faq").style.color = "white";
        document.getElementById("about").style.color = "white";

    }
    function active4(){
      var x = document.getElementById("about")
      x.style.color = "red";
      document.getElementById("home").style.color = "white";
      document.getElementById("faq").style.color = "white";
      document.getElementById("info").style.color = "white";
  }
  

        return (
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark" style={{boxShadow: "none"}}>
          <div id="logo-href">
<a href={process.env.PUBLIC_URL + '/#/'} onClick={active}><img src={main_logo2} id="logo-nav" alt="main-logo" /></a></div>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" className="navDropDown"/>
            
            
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" style={{textShadow: "none"}}>

  <ReactBootStrap.Nav className="mr-auto" style={{textShadow: "none"}}>

</ReactBootStrap.Nav>
    <ReactBootStrap.Nav className='nav-size' style={{textShadow: "none"}}>
      
    {/* <ReactBootStrap.Nav.Link href="/" className="nav-text">HOME</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/faq" className="nav-text">FAQ</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/info" className="nav-text">INFO</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/order1" className="nav-text">ORDER</ReactBootStrap.Nav.Link> */}
      <a href={process.env.PUBLIC_URL + '/#/'} className="nav-font" id="home" onClick={active}>HOME</a>
      <a href={process.env.PUBLIC_URL + '/#/faq'} className="nav-font" id="faq" onClick={active2}>FAQ</a>
      <a href={process.env.PUBLIC_URL + '/#/info'} className="nav-font" id="info" onClick={active3}>INFO</a>
      <a href={process.env.PUBLIC_URL + '/#/about'} className="nav-font" id="about" onClick={active4}>ABOUT</a>

    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>

</ReactBootStrap.Navbar>
        )

    }
}

export default Navbar
