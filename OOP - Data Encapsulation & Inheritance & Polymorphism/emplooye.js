// wap to create a class for employee with attributes like id ,name,salary and role, set all attributes
// and get for atleast 3 objects/employee.

class Employee{
    #id;
    #name;
    #salary;
    #role
    constructor(id,name,salary,role){
        this.#id=id;
        this.#name=name
        this.#salary=salary
        this.#role=role
    }
    print(){
        document.writeln(this.#id)
        document.writeln(this.#name)
        document.writeln(this.#salary)
        document.writeln(this.#role)
    }

}

const emp1=new Employee("Ankit","Developer",50000,"Frontend")
const emp2=new Employee("suni","Developer",110000,"Backend")
const emp3=new Employee("shubham","Developer",60000,"Fullstack")

emp1.print()
emp2.print()
emp3.print()