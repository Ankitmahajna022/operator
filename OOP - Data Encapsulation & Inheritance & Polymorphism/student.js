// create a class named student with private attributes roll_no,name,age,std and percentage, initialize
// all attributes by parameterized constructor(private attributes need to declare in global scope in class)
// and print all details for 3 students.

class Student{
    #roll_no
    #name
    #age
    #std
    #percentage
    constructor(roll_no,name,age,std,percentage){
        this.#roll_no=roll_no
        this.#name=name
        this.#age=age
        this.#std=std
        this.#percentage=percentage
    }

    print(){
        document.writeln(this.#roll_no)
        document.writeln(this.#name)
        document.writeln(this.#age)
        document.writeln(this.#std)
        document.writeln(this.#percentage)
    }
}

const student1=new Student(1,"ankit",20,10,90)
const student2=new Student(2,"shubham",21,11,80)
const student3=new Student(3,"suni",22,12,70)

student1.print()    
student2.print()    
student3.print()