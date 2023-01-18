import CreateEmployee from "../components/pages/CreateEmployee";
import EmployeesList from "../components/pages/EmployeesList";
import ErrorPage from "../components/pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <CreateEmployee />,
    exact: true,
  },
  {
    path: "/usersList",
    element: <EmployeesList />,
    exact: true,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
