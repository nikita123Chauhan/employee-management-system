import React, {useEffect, useState} from "react";
import EmployeeTable from "./components/EmployeeTable";
import AddEmployeeForm from "./components/AddEmployeeForm";
import FilterDropdown from "./components/FilterDropdown";
import "./App.css";

const App=()=>{
  const [employees, setEmployees] =useState([]);
  const [FilterEmployees, setFilterEmployees]= useState([]);
  useEffect(() =>{
  fetch("https://localhost:5000/employee").then((res)=>res.json)
   .then((data)=>{
    setEmployees(data);
    setFilterEmployees(data);
   });
   },[]);

  const AddEmployee=(newEmployee)=>{
    fetch("https://localhost:5000/employee"),{
      method:"POST",
      headers:{"Content-Type":application/json},
      body:
      JSON.stringlyfy({...newEmployees,id:Date.now()}),}).then(()=>{
        setEmployees([...employees,{...newEmployee,id:Date.now()}]);
        setFilteredEmployees([...employees,{...newEmployee,id:Date.now()}]);

      });

    };
    const handleDelete=(id)=>{
      fetch(`https://localhost:5000/employee/${id}`,{method:"DELETE"}).then(()=>{
        const updated=employees.filter((emp)=>emp.id!==id);
        setEmployees(updated);
        setFilteredEmployees(updated);
      });
  
    };
    const filterByDepartment=(dept)=>{
      if(dept===""){
        setFilterEmployees(employees);
      }
      else{
        setFilteredEmployees(employees.filter((emp)=>emp.department===dept)),
      }
    };

    return(
      <div>
        <h1>Employee Management</h1>
        <AddEmployeeForm addEmployee={addEmployee}/>
        <FilterDropdown departments={[...newSet(employees.map(emp)=>emp.department)]}
        filterByDepartment={filterByDepartment}/>

        <EmployeeTable employees={FilterEmployees} handleDelete={handleDelete}/>>
      </div>
    )
   
  };

};

export default App;