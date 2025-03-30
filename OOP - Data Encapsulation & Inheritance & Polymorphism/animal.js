// wap to craete a class for animal with attribute like name,type,gender and age, make these all
// attribute private to secure direct access of the users, perform input and output for 3 defferent
// animals.

class Animal{
    #name
    #type
    #gender
    #age

    constructor(name,type,gender,age){
        this.#name=name
        this.#type=type
        this.#gender=gender
        this.#age=age
    }

    print(){
        document.writeln(this.#name)
        document.writeln(this.#type)
        document.writeln(this.#gender)
        document.writeln(this.#age)
    }
}

const animal1=new Animal("dog","mammal","male",5)
const animal2=new Animal("cat","mammal","female",7)
const animal3=new Animal("snake","reptile","male",2)

animal1.print()
animal2.print()
animal3.print()