import React from "react";
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const links = [
  <Link component={RouterLink} to="/" variant="h6">
    Todos
  </Link>,
  <Link component={RouterLink} to="/kanban" variant="h6">
    Kanban
  </Link>,
];

export default links;
