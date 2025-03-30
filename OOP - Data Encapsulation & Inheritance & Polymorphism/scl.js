// wap to perform method overriding to display student details.
// school(name,year) -> student(name,std,school,year)
// display() <- override this method

class School{
    constructor(name,year){
        this.name=name
        this.year=year
    }
    display() {
        document.writeln(this.name)
        document.writeln(this.year)
    }
}

class Student extends School{
    constructor(name,std,school,year){
        super(name,year)
        this.std=std
        this.school=school
    }            
    display() {
        document.writeln(this.name)
        document.writeln(this.std)
        document.writeln(this.school)
        document.writeln(this.year)
    }       
}

const student=new Student("abc",10,"xyz",2020)
student.display()



