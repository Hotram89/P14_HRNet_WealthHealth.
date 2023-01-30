import React, { useState } from "react";
import "./Form.css";
import Picker from "./Picker";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dropdown from "./Dropdown";
import { statesList, servicesList } from "../../data/data";

export default function Form() {
  const [userInfos, setUserInfos] = useState({
    firstname: "",
    lastname: "",
  });

  const dispatch = useDispatch();

  const handleInputs = (e) => {
    if (e.target.classList.contains("firstname")) {
      const newObjState = { ...userInfos, firstname: e.target.value };
      setUserInfos(newObjState);
    } else if (e.target.classList.contains("lastname")) {
      const newObjState = { ...userInfos, lastname: e.target.value };
      setUserInfos(newObjState);
    }
  };

  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "ADDUSER",
      payload: userInfos,
    });

    setUserInfos({
      firstname: "",
      lastname: "",
    });

    let path = "/usersList";
    navigate("/usersList");
  }

  return (
    <form className="create-form">
      <label>
        First Name{" "}
        <input
          onChange={handleInputs}
          type="text"
          placeholder="John"
          className="firstname"
        />
      </label>
      <label>
        Last Name{" "}
        <input
          onChange={handleInputs}
          type="text"
          placeholder="Smith"
          className="lastname"
        />
      </label>
      <label>
        Date of birth <input />
      </label>
      <Picker />
      <label>
        Start Date <input />
      </label>
      <label>
        Street <input />
      </label>
      <label>
        City <input />
      </label>
      <label className="state-label">
        State{" "}
        <Dropdown
          options={statesList.state}
          placeholder={statesList.state[0]}
        />
      </label>
      <label>
        Zip Code <input type="number" />
      </label>
      <label>
        Department{" "}
        <Dropdown
          options={servicesList.service}
          placeholder={servicesList.service[0]}
        />
      </label>

      <button className="btn-save" onClick={handleSubmit}>
        Save
      </button>
    </form>
  );
}
