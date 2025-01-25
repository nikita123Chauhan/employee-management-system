import React,{ useState} from "react";
import "./AddEmployeeForm.css";

const AddEmployeeForm=({AddEmployee})=> {
    const [fromData, setFormatData]=useState({name=" ", designation:" ", department:" "});
    const handleSubmit = (e) =>{e.preventDefault();
        addEmployee(FormData);
        setFormatData({name:"",designation:" ", department:""});
    };
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={formData.name} onChange={(e)=>
            setFormatData({...formData, name:e.target.value})}
            />
            <input type="text" placeholder="Designation" value={formData.designation} onChange={(e)=>
            setFormatData({...formData, designation:e.target.value})}
            />
             <input type="text" placeholder="Department" value={formData.department} onChange={(e)=>
            setFormatData({...formData, department:e.target.value})}
            />
            <button type="submit">Add Employee</button>
        </form>
        
    );
};

export default AddEmployeeForm;