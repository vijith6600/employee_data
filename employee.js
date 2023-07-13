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
        alert(`User ${searchbox.value} Found`)
    }

    else{
        alert(`User Doesnot Exist please login Again`)
    }
}