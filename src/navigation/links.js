import { Link as RouterLink } from "react-router-dom";
import { Kanban, TodoList } from "../pages";

const links = [
  {
    path: "/",
    linkComponent: RouterLink,
    component: TodoList,
    text: "Todos",
  },
  {
    path: "/kanban",
    linkComponent: RouterLink,
    component: Kanban,
    text: "Kanban",
  },
];

export default links;
