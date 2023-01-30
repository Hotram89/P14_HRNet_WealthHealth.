import React from "react";
import Table from "@mui/material/Table";
import { TableBody } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { v4 as uuidv4, v4 } from "uuid";
import "./Table.css";

export default function BasicTable(props) {
  let users = props.users;
  let firstUser = props.users[0];
  let tablecells = Object.keys(firstUser);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tablecells.map((cell, index) => (
              <TableCell id={v4()}>{cell}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.FirstName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">{user.FirstName}</TableCell>
              <TableCell scope="row">{user.LastName}</TableCell>
              <TableCell scope="row">{user.StartDate}</TableCell>
              <TableCell scope="row">{user.Department}</TableCell>
              <TableCell scope="row">{user.DateOfBirth}</TableCell>
              <TableCell scope="row">{user.City}</TableCell>
              <TableCell scope="row">{user.State}</TableCell>
              <TableCell scope="row">{user.ZipCode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
