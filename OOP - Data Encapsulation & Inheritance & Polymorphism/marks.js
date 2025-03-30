//Scenario: You are developing a student grading system where a student has marks in percentage, but the grade (A, B, C, etc.) should be automatically determined.
//Task:
//Create a Student class with a property percentage.
//Use a getter grade that returns the grade based on the percentage.
//Use a setter grade that updates percentage based on the grade entered (A, B, C, etc.).

class Student{
    constructor(percentage)
    {
        this.percentage=percentage
    }
    get grade()
    {
        if(this.percentage>=90)
        {
            return "A"
        }
        else if(this.percentage>=80)
        {
            return "B"
        }
        else if(this.percentage>=70)
        {
            return "C"
        }
        else if(this.percentage>=60)
        {
            return "D"    
        }
        else            
        {
            return "E"    
        }    
    }
    set grade(grade)
    {
        if(grade=="A")
        {
            this.percentage=90
        }
        else if(grade=="B")
        {
            this.percentage=80
        }
        else if(grade=="C")
        {
            this.percentage=70
        }
        else if(grade=="D")
        {
            this.percentage=60
        }
        else
        {    
            this.percentage=50
        }
    }

    print()
    {
        document.writeln(this.percentage)
        document.writeln(this.grade)
    }
}

let student = new Student(80);

student.print();