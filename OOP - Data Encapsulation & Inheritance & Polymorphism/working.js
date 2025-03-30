//Scenario: You are working on a vehicle rental system. Different types of vehicles share some common properties, but there are multiple levels and categories of vehicles.
//Task:
//Create a Vehicle class with properties brand and year.
//Create a Car class that extends Vehicle and adds a fuelType property.
//Create a Bike class that extends Vehicle and adds a hasGear property.
//Add another class ElectricCar that extends Car and adds a batteryCapacity property.
//Implement a getDetails() method in Vehicle and override it in different subclasses.

class Vehicle {
        constructor(brand, year) {
            this.brand = brand;
            this.year = year;
        }
    
        getDetails() {
            document.writeln(`Brand: ${this.brand}, Year: ${this.year}`);
        }
    }
    
    class Car extends Vehicle {
        constructor(brand, year, fuelType) {
            super(brand, year);
            this.fuelType = fuelType;
        }
    
        getDetails() {
            super.getDetails();
            document.writeln(`Fuel Type: ${this.fuelType}`);
        }
    }

    class Bike extends Vehicle {
        constructor(brand, year, hasGear) {
            super(brand, year);
            this.hasGear = hasGear;
        }
    
        getDetails() {
            super.getDetails();
            document.writeln(`Has Gear: ${this.hasGear}`);
        }
    }
    
    class ElectricCar extends Car {
        constructor(brand, year, fuelType, batteryCapacity) {
            super(brand, year, fuelType);
            this.batteryCapacity = batteryCapacity;
        }
    
        getDetails() {
            super.getDetails();
            document.writeln(`Battery Capacity: ${this.batteryCapacity}`);
        }
    }

    const vehicle = new Vehicle("Toyota", 2022);
    const car = new Car("Honda", 2023, "Gasoline"); 
    const bike = new Bike("Suzuki", 2022, true);
    const electricCar = new ElectricCar("Tesla", 2023, "Electric", 100);    

    vehicle.getDetails();   
    car.getDetails();   
    bike.getDetails();   
    electricCar.getDetails();