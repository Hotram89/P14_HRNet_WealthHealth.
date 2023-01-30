import axios from "axios";
import { users } from "./data";

export default class ApiProvider {
  constructor() {
    this.url = "http://localhost:3000/user/";
  }

  getUsers() {
    return users;
  }
}
