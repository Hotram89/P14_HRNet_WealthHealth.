import React from "react";
import "./CreateEmployee.css";

import Form from "../utils/Form.js";
import { useState } from "react";
import Header from "../layout/Header";

const CreateEmployee = () => {
  //initial state
  const [usersList, setUsersList] = useState(0);

  return (
    <main>
      <Header></Header>
      <h2>View Current Employees</h2>
      <section className="user-add">
        <h1>
          <div className="add-icon">+</div>Create Employee
        </h1>

        <Form />
      </section>
    </main>
  );
};

export default CreateEmployee;
