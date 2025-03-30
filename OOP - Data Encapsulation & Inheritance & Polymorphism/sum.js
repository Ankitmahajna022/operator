// wap to perform method overloading to find sum of 2 to 4 arguments.
// ex. sum(10,20), sum(10,20,30), sum(_....4)

class sum{
    #a
    #b
    #c
    #d
    constructor(a,b,c,d)
    {
        this.#a=a
        this.#b=b
        this.#c=c
        this.#d=d
    }

    print(){
        if(this.#a,this.#b)
        {
            document.writeln(this.#a+this.#b)
        }
        else if(this.#a,this.#b,this.#c)
        {
            document.writeln(this.#a+this.#b+this.#c)
        }
        else if(this.#a,this.#b,this.#c,this.#d)
        {
            document.writeln(this.#a+this.#b+this.#c+this.#d)
        }
    }
}

const sum1=new sum(10,20)
const sum2=new sum(10,20,30)
const sum3=new sum(10,20,30,40)

sum1.print()        
sum2.print()        
sum3.print()