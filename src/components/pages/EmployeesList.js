import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "../../store/Reducer/userReducer";
import { v4 as uuidv4 } from "uuid";
import Card from "../utils/Card";

const EmployeesList = () => {
  const { users } = useSelector((state) => ({
    ...state.userReducer,
  }));

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (users.length === 0) {
  //       dispatch(getUsers());
  //     }
  //   }, []);
  return (
    <main>
      <div>Employees List</div>
      <h1 className="list-title">Current Employees</h1>
      <div className="container-cards">
        <Card></Card>
      </div>
    </main>
  );
};

export default EmployeesList;
