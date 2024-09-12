 /* ==== Problem #1 ====
   The dealer can't recall the information for a car with an id of 33 on his lot. 
   Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. 
   Then log the car's year, make, and model in the console log in the format of:
  ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");*/  

function carWithId33(inventory){
    let cardDetails;

    for(let i=0; i<inventory.length;i++){
        if(inventory[i].id == 33){
            cardDetails = inventory[i];
            break;
        }
    }

    console.log(`Car 33 is a ${cardDetails.car_year}, ${cardDetails.car_make}, ${cardDetails.car_model}`);

}

/*                  ==== Problem #2 ====
  The dealer needs the information on the last car in their inventory. 
  Execute a function to find what the make and model of the last car in the inventory is?*/

function lastCar(inventory){
    let cardDetails = inventory[inventory.length-1];
    console.log(`Last car is a ${cardDetails.car_make}, ${cardDetails.car_model}`);
}

function sortCarModelNames(inventory){

    let allCarModels = [];

    for(let i=0; i<inventory.length;i++){
        allCarModels.push(inventory[i].car_model);        
    }

    for (let i=0;i<inventory.length-1;i++){
        for(let j=i+1; j<inventory.length;j++){
            if((allCarModels[i])>allCarModels[j]){
                let temp = allCarModels[i];
                allCarModels[i] = allCarModels[j];
                allCarModels[j] = temp;
            }
        }
    }

    console.log(allCarModels);
}

function everyCarYear(inventory){
    let carYear = [];
    for(let i=0;i<inventory.length;i++){
        carYear.push(inventory[i].car_year);
    }
    return carYear;
}

function olderCar(){
    let olderCar = [];
    let car_list = everyCarYear(inventory);
    for(let i=0; i<car_list;i++){
        if(car_list[i]<2000){
            olderCar.push(car_list[i]);
        }
    } 
}

function carBmwAudi(inventory){
    let carList= [];
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].car_make === 'Audi' || inventory[i].car_make === 'BMW'){
            carList.push(inventory[i]);
        }
    }
}


export {carWithId33,lastCar, sortCarModelNames,everyCarYear,olderCar,carBmwAudi}