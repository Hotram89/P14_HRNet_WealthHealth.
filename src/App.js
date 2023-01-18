import "./App.css";
import CreateEmployee from "./components/pages/CreateEmployee.js";
import { BrowserRouter } from "react-router-dom";
import Router from "./route/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
