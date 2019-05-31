import React from "react";
import FilterLink from "../containers/FilterLink";

const Footer = ({ activeFilter, changeFilter }) => {
  return (
    <div>
      <FilterLink
        filter="SHOW_ALL"
        activeFilter={activeFilter}
        changeFilter={changeFilter}
      >
        All
      </FilterLink>
      <FilterLink
        filter="SHOW_ACTIVE"
        activeFilter={activeFilter}
        changeFilter={changeFilter}
      >
        Active
      </FilterLink>
      <FilterLink
        filter="SHOW_COMPLETED"
        activeFilter={activeFilter}
        changeFilter={changeFilter}
      >
        Completed
      </FilterLink>
    </div>
  );
};

export default Footer;
