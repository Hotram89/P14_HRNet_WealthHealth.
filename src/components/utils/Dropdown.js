import React, { useState } from "react";
import Caret from "../../img/caret.svg";
import "./Dropdown.css";

export default function Dropdown(props) {
  const arr = props.options;

  const [className, setClassName] = useState("");
  const [selected, setSelected] = useState(props.placeholder);

  const toggleMenu = (e) => {
    if (!className) {
      setClassName("menu-active");
    } else {
      setClassName("");
    }
  };

  const handleOption = (e) => {
    setSelected(e.target.innerHTML);
    setClassName("");
  };

  return (
    <div className="dropdown-container">
      <div className="selected-option">
        {selected}
        <img
          className="dropdown-icon"
          src={Caret}
          alt="dropdown icon"
          onClick={toggleMenu}
        />
      </div>
      <ul className={className + " dropdown-list "}>
        {arr.map((el) => (
          <li onClick={handleOption}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
