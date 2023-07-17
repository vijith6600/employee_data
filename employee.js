function save(){
    employee={
        name : name1.value,
        id : id1.value,
        address : address1.value,
        desig : desig1.value,
        salary : salary1.value
    }
    
    if(employee.id in localStorage){
        alert("Employee Exist")
    }
    else{
        localStorage.setItem(employee.id,JSON.stringify(employee))
        alert("employee details added sucessfully")
    }
}

function search(){
    if( searchbox.value in localStorage){
        employee = JSON.parse(localStorage.getItem(searchbox.value))
       result.innerHTML= `<p> Employee Id : ${employee.id} </p>
       <p> Employee Name : ${employee.name} </p>
       <p> Employee Address : ${employee.address} </p>
       <p> Employee Designation : ${employee.desig} </p>
       <p> Employee Salary : ${employee.salary} </p>` 
    }

    else{
        result.innerHTML= null

        alert(`User Doesnot Exist please login Again`)
    }
}