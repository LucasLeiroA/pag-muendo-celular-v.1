import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "./NavTar.css"
import CartWidget from "../CartWidget/CartWidget";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavTar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
       
      {/* <div className="nav-bar-separacion">
        
      </div> */}
       <Link className="logo" to="/">
          <Navbar.Brand href="#home"> 
            <img src="/logo12345.png" alt="" />
          </Navbar.Brand>
        </Link>
     
      <nav ref={navRef}>
        
      <Nav className="nav-bar">
      {/* Puse todos los link de navegacion dentro del boton para que cuando pulse alguno de los link este menu se contraiga automanticamente */}
      <button className="nav-btn-nav-close-btn" onClick={showNavbar}>
      <Link to="/categoria/celular">
            <Nav.Link href="#features">Celulares</Nav.Link>
          </Link>
          <Link to="/categoria/accesorio">
            <Nav.Link href="#pricing">Accesorios</Nav.Link>
          </Link>
          <Link to="/categoria/funda">
            <Nav.Link href="#pricing">Fundas</Nav.Link>
          </Link>
          <Link to="/quinesSomos!"> 
            <Nav.Link className="btn-n1" href="#pricing">
              Quienes Somos!
            </Nav.Link>
          </Link>
          <Link to="/cart">
            <Nav.Link className="carrito" href="#cart">
              <CartWidget />
            </Nav.Link>{" "}  

          </Link>
          
        </button>
          
        </Nav>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

     <button  className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button> 
    </header>
     
  );
}

export default NavTar;
