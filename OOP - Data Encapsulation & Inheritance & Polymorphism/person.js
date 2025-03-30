// perform multilevel inheritance where Indian is parent for class person, person is parent for class employee
// indian class - adharNo,birthPlace
// person - name,age,gender
// emp - id,salary, role
// access all properties of parent by child class only and set and get all values.

// Base class
class Indian {
    constructor(adharNo, birthPlace) {
        this.adharNo = adharNo;
        this.birthPlace = birthPlace;
    }

    getIndianDetails() {
        return `Aadhar No: ${this.adharNo}, Birth Place: ${this.birthPlace}`;
    }
}

// Derived class (inherits from Indian)
class Person extends Indian {
    constructor(adharNo, birthPlace, name, age, gender) {
        super(adharNo, birthPlace);
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getPersonDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
    }
}

// Derived class (inherits from Person)
class Employee extends Person {
    constructor(adharNo, birthPlace, name, age, gender, id, salary, role) {
        super(adharNo, birthPlace, name, age, gender);
        this.id = id;
        this.salary = salary;
        this.role = role;
    }

    getEmployeeDetails() {
        return `Employee ID: ${this.id}, Salary: ${this.salary}, Role: ${this.role}`;
    }

    displayAllDetails() {
        document.writeln(this.getIndianDetails());
        document.writeln(this.getPersonDetails());
        document.writeln(this.getEmployeeDetails());
    }
}

// Creating an Employee object
const emp = new Employee("1234-5678-9012", "Mumbai", "Rajesh Kumar", 30, "Male", 101, 75000.50, "Software Engineer");

// Displaying all details
emp.displayAllDetails();
