import { Link as RouterLink } from "react-router-dom";
import { Kanban, TodoList } from "../pages";

const links = [
  {
    path: "/",
    linkComponent: RouterLink,
    Component: TodoList,
    text: "Todos",
  },
  {
    path: "/kanban",
    linkComponent: RouterLink,
    Component: Kanban,
    text: "Kanban",
  },
];

export default links;
