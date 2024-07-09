// Write your solution in this file!
const employee = {
    name : 'Joey',
    streetAddress: 'Thika Road'
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    let newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key){
    let employeeOne = {...employee}
    delete employeeOne[key];
    return employeeOne;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}
