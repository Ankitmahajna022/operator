//Scenario: You are developing a car rental system. The way a car starts (startEngine()) differs based on whether it’s a PetrolCar or ElectricCar, but the main method should remain the same.
//Task:
//Create an abstract Car class with a method startEngine().
//Implement two subclasses PetrolCar and ElectricCar, each defining startEngine() differently.

class Car {
        startEngine() {
            document.writeln("Starting the engine...");
        }
    }
    
    class PetrolCar extends Car {}
    
    class ElectricCar extends Car {
        startEngine() {
            document.writeln("Starting the engine using electricity...");
        }
    }

    const petrolCar = new PetrolCar();
    petrolCar.startEngine(); // Output: Starting the engine...
    
    const electricCar = new ElectricCar();
    electricCar.startEngine(); // Output: Starting the engine using electricity...