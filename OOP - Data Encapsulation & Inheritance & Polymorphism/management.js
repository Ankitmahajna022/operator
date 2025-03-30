//Scenario: You are developing a company employee management system where each department has multiple employees.
//Task:
//Create an Employee class with properties name and position.
//Create a Department class that contains an array of Employee objects.
//Implement a method in Department to return the names of all employees in that department.


class Employee {
    constructor(name, position) {
      this.name = name;
      this.position = position;
    }
  }
  
  class Department {
    constructor() {
      this.employees = [];  
    }
    addEmployee(employee) {
      this.employees.push(employee);
    }    
    getEmployeeNames() {
      return this.employees.map(employee => employee.name);  
    }
  } 
  
  const department = new Department();
  
  const employee1 = new Employee("John Doe", "Manager");
  const employee2 = new Employee("Jane Doe", "Developer");
  
  department.addEmployee(employee1);
  department.addEmployee(employee2);
  
  document.writeln(department.getEmployeeNames());