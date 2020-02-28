import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ filter, children }) => (
  <NavLink
    exact
    to={filter === "SHOW_ALL" ? "/" : `/${filter}`}
    activeStyle={{
      textDecoration: "none",
      color: "black"
    }}
  >
    {children}
  </NavLink>
);

Link.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
