import React from "react";
import Logo from "../../img/logo_wealth.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  function backHome(e) {
    navigate("/");
  }
  return (
    <header onClick={backHome}>
      <h1 className="softwareName">HRnet</h1>
      <img src={Logo} alt="company log" className="logo" />
    </header>
  );
}
