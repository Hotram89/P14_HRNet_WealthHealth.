import React from "react";
import { v4 as uuidv4, v4 } from "uuid";
import Card from "../utils/Card";
import ApiProvider from "../../data/ApiProvider";
import BasicTable from "../utils/Table";
import Header from "../layout/Header";

const EmployeesList = () => {
  let users = new ApiProvider().getUsers();

  return (
    <main>
      <Header></Header>
      <h1 className="list-title">Current Employees</h1>
      <div className="container-cards">
        <BasicTable users={users} />
      </div>
    </main>
  );
};

export default EmployeesList;
