import React from "react";
import "./style.less";
const FilterBtn = () => {
  return (
    <button className="filter-btn">
      <span className="iconify icon-btn" data-icon="cil:list-filter"></span>
      <span className="name-btn">Filter</span>
    </button>
  );
};

export default FilterBtn;
