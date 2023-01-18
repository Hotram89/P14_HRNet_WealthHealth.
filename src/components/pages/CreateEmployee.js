import React from "react";
import "./CreateEmployee.css";
import Picker from "../Picker";
import { useNavigate } from "react-router-dom";

const CreateEmployee = () => {
  let navigate = useNavigate();
  function handleSubmit(e) {
    let path = "/usersList";
    navigate("/usersList");
  }
  return (
    <main>
      <h1 className="companyName">HRnet</h1>
      <h2>View Current Employees</h2>
      <section className="user-add">
        <h1>
          <div className="add-icon">+</div>Create Employee
        </h1>
        <form className="create-form">
          <label>
            First Name <input type="text" placeholder="John" />
          </label>
          <label>
            Last Name <input type="text" placeholder="Smith" />
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
          <label>
            State <input />
          </label>
          <label>
            Zip Code <input type="number" />
          </label>
          <label>
            Department <select></select>
          </label>

          <button className="btn-save" onClick={handleSubmit}>
            Save
          </button>
        </form>
      </section>
    </main>
  );
};

export default CreateEmployee;
