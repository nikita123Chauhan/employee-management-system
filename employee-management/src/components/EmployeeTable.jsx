import React from "react";
import "./styles/EmployeeTable.css";
const EmployeeTable=({employees, handleDelete}) => { 
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Department</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((emp)=>(
                    <tr key={emp.id}>
                        <td>{emp.name}</td>
                        <td>{emp.designation}</td>
                        <td>{emp.department}</td>
                        <td><button onClick={()=>
                            handleDelete(emp.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;