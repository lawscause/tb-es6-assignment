# tb-es6-assignment


1. Create an Employee class.
An employee should have
** name
** Id number
** List of permissions that they can perform on the company website
** Store number for the store where they work
class Employee {
 constructor(name, idNumber, permissions, storeNumber) {
   this.name = name;
   this.idNumber = idNumber;
   this.permissions = permissions;
   this.storeNumber = storeNumber;
   this.employeeType = "Employee";
   this.permissions);
 }
}


2. Create a Manager class.
** A manager is a type of employee.
** A manager should should have
*** name
*** Id number
*** List of permissions that they can perform on the company website
*** Store number for the store where they work
*** List of employees they manage
*** The ability to change the permissions an employee that they manage has on the website.

**Any methods created for the classes above need NOT operate fully but MUST be formatted correctly and require appropriate parameters.

3. const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

** Destructure and assign the elements of countries array to fin, est, sw, den, nor

4. const rectangle = {
 width: 20,
 height: 10,
 area: 200,
 perimeter: 60
}

Destructure the rectangle object by its properties.


5. const evens = [0, 2, 4, 6, 8, 10]; 
const odds = [1, 3, 5, 7, 9]; 

Using the spread operator, the Array .map() method, and at least one arrow function to place the values from evens and odds into an array and display the values on a html screen in numerical order.



