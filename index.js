// Write your solution in this file!
const employee = {
    "name": "Sam",
    "streetAddress":"11 Broadway"
}

function updateEmployeeWithKeyAndValue(object, key, value){
const newObj = {...employee};
newObj["streetAddress"] = "11 Broadway";
return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    employee["streetAddress"] = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(object, key){
    const newObj2 = {...employee};
    delete newObj2.name;
    return newObj2;
}

function destructivelyDeleteFromEmployeeByKey(object, key){
    delete employee.name;
    return employee;
}