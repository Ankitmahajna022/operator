//Scenario: You are developing a vehicle manufacturing system where cars and bikes are created dynamically based on input.
// Task:
//Implement a VehicleFactory class with a createVehicle(type, brand, year) method.
//Based on the type, return either a Car or Bike instance.

class VehicleFactory {
    createVehicle(type, brand, year) {
      if (type === "car") {
        return new Car(brand, year);
      } else if (type === "bike") {
        return new Bike(brand, year);
      }
    } 
  }

  const factory = new VehicleFactory();
  const car = factory.createVehicle("car", "Honda", 2023);
  const bike = factory.createVehicle("bike", "Suzuki", 2022);

  car.getDetails(); // Output: Brand: Honda, Year: 2023
  bike.getDetails(); // Output: Brand: Suzuki, Year: 2022