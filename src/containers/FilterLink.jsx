import Link from "../components/Link";

import React from "react";

function FilterLink({ children, filter, activeFilter, changeFilter }) {
  // console.log(activeFilter, filter);
  return (
    <Link
      children={children}
      active={filter === activeFilter}
      onClick={() => changeFilter(filter)}
    />
  );
}

export default FilterLink;
