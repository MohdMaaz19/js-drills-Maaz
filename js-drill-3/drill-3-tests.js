import {carWithId33,lastCar, sortCarModelNames,everyCarYear,olderCar,carBmwAudi} from './drill-3-solution.js';
import inventory from './drill-3-question.js';


// ==== Problem #1 ====
  // The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:

carWithId33(inventory);

 // ==== Problem #2 ====
  // The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?

lastCar(inventory);


sortCarModelNames(inventory);

  // ==== Problem #4 ====
  // The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
  everyCarYear();
  
  // ==== Problem #5 ====
  // The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
  olderCar();

  // ==== Problem #6 ====
  // A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

  carBmwAudi(inventory);