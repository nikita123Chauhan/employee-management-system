import React from "react";
import "./styles/FilterDropdown.css";

const FilterDropdown=({departments, filterByDepartment}) => {
    return(
        <select onChange={(e) => filterByDepartment(e.target.value)}>
            <option value=" ">All departments</option>
              {departments.map((dept, index) =>(
                <option key={index}
                value={dept}></option>
              ))}
        </select>
    );
};
export default FilterDropdown;