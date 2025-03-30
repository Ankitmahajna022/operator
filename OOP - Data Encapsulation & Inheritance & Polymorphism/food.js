//Scenario: You are building a food delivery app where each restaurant has a name, cuisine type, and rating.
//Task:
//Create a Restaurant class with properties: name, cuisineType, and rating.
//Instantiate 3 restaurant objects with different values.

class Restaurant {
    constructor(name, cuisineType, rating) {
        this.name = name;
        this.cuisineType = cuisineType;
        this.rating = rating;
    }
    print(){
        document.writeln(this.name)
        document.writeln(this.cuisineType)
        document.writeln(this.rating)
    }
}    

const restaurant1 = new Restaurant("Pizza Hut", "Italian", 4.5);        
const restaurant2 = new Restaurant("Burger King", "American", 4.2);        
const restaurant3 = new Restaurant("Taco Bell", "Mexican", 4.0);        

restaurant1.print()
restaurant2.print()
restaurant3.print()
