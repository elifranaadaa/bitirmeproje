import React from "react";
import MeramLogo from "../assets/footerlogo.svg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <a href="https://www.meram.bel.tr/">
          <img src={MeramLogo} alt="" />
        </a>
        <div className="mainLink">
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Kurslar</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/gallery">Galeri</Link>
          <Link to="https://www.meram.bel.tr/iletisim">İletişim</Link>
        </div>
      </div>
    </div>
  );
};
