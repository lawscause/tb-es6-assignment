/*
Create an Employee class.
An employee should have
name
Id number
List of permissions that they can perform on the company website
Store number for the store where they work
*/
class Employee {
  constructor(name, idNumber, permissions, storeNumber) {
    this.name = name;
    this.idNumber = idNumber;
    this.permissions = permissions;
    this.storeNumber = storeNumber;
    this.employeeType = "Employee";
    this.permissions;
  }
}

/*
Create a Manager class.
A manager is a type of employee.
A manager should should have
name
Id number
List of permissions that they can perform on the company website
Store number for the store where they work
List of employees they manage
The ability to change the permissions an employee that they manage has on the website.

**Any methods created for the classes above need NOT operate fully but MUST be formatted correctly and require appropriate parameters.
*/
class Manager extends Employee {
  constructor(name, idNumber, permissions, storeNumber, employees) {
    super(name, idNumber, permissions, storeNumber);
    this.employees = employees;
    this.employeeType = "Manager";
  }
  modifyEmployeePermissions(employee, updatedPermissionSet) {
    //the code here is an example only the method signature was required
    let foundEmployee = false;
    for (let i = 0; i < this.employees.length; i++) {
      if (employee.idNumber === this.employees[i].idNumber) {
        employee.permissions = updatedPermissionSet;
        foundEmployee = true;
        break;
      }
    }

    return employee;
  }
}

let emp1 = new Employee("Anne Gable", 123, ["add", "update"], 17);
let emp2 = new Employee("Alvin Chipmunk", 99, ["add", "list"], 17);
let mg1 = new Manager(
  "Theo Chipmunk",
  45,
  ["add", "update", "list", "delete"],
  17,
  [emp1, emp2]
);

console.log("Employee 1: ", emp1);
console.log("Employee 2: ", emp2);
console.log("Manager 1: ", mg1);
