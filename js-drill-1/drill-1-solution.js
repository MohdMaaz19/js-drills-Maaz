
//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
function emailList(personList){
    
    if(!Array.isArray(personList)){
        console.log("Please enter a valid argument");
        return;
    }

    if(!personList){
        console.log("Please enter a valid argument");
        return;
    }

    if(personList.length==0){
        console.log("The argument array is empty");
        return;
    }
    
    let email = [];
    for(let i=0; i<personList.length;i++){
        email.push(personList[i]['email']);
    }
    console.log(email);
    return email;
}

//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

function printHobbiesByAge(personList,age){

    if(!Array.isArray(personList)){
        console.log("Please enter a valid argument");
        return;
    }

    if(!personList){
        console.log("Please enter a valid argument");
        return;
    }

    if(personList.length==0){
        console.log("The argument array is empty");
        return;
    }
    
    let count = 0;
    for(let i=0; i<personList.length; i++){
     if(personList[i]['age']==age){
        console.log(`Hello my hobbies are ${personList[i]['hobbies']}`);
        count++;
     } 
    }
    if(count==0){
        console.log(`No such person of age ${age}.`);
    }
    return;
}

//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

function studentsFromAustralia(personList){

    if(!Array.isArray(personList)){
        console.log("Please enter a valid argument");
        return;
    }

    if(!personList){
        console.log("Please enter a valid argument");
        return;
    }

    if(personList.length==0){
        console.log("The argument array is empty");
        return;
    }

    let studentList = [];
    for(let i=0;i<personList.length;i++){
        if(personList[i]['country']==='Australia' && personList[i]['isStudent']){
            studentList.push(personList[i]['name']);
        }
    }
    if(studentList.length>0){
        console.log(`Students studying in Australia: ${studentList}.`);
    }else{
        console.log("Sorry.. No students are from Australia");
    }
   
    return;
}

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function detailsAtThree(personList){

    if(!Array.isArray(personList)){
        console.log("Please enter a valid argument");
        return;
    }

    if(!personList){
        console.log("Please enter a valid argument");
        return;
    }

    if(personList.length==0){
        console.log("The argument array is empty");
        return;
    }

    console.log(`My name is ${personList[3]['name']} and I live in ${personList[3]['city']}`);
    return;

}

//    Implement a loop to access and print the ages of all individuals in the dataset.

function printAges(personList){

    if(!personList){
        console.log("Please enter a valid argument");
        return;
    }

    if(!Array.isArray(personList)){
        console.log("Please enter a valid argument");
        return;
    }

    if(personList.length==0){
        console.log("The argument array is empty");
        return;
    }

    let ages = [];
    for(let i=0;i<personList.length;i++){
        ages.push(personList[i].age);
    }
    console.log(ages);
    return;
}

//    Create a function to retrieve and display the first hobby of each individual in the dataset.

function firstHobby(personList){

    if(!Array.isArray(personList)){
        console.log("Please enter a valid argument");
        return;
    }

    if(!personList){
        console.log("Please enter a valid argument");
        return;
    }

    if(personList.length==0){
        console.log("The argument array is empty");
        return;
    }

    let hobby = [];
    for(let i=0; i<personList.length;i++){
        hobby.push(personList[i]['hobbies'][0]);
    }
    console.log(hobby);
    return;
}

//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
function detailsOfPerson(personList){

    if(!Array.isArray(personList)){
        console.log("Please enter a valid argument");
        return;
    }

    if(!personList){
        console.log("Please enter a valid argument");
        return;
    }

    if(personList.length==0){
        console.log("The argument array is empty");
        return;
    }

    for(let i=0; i<personList.length;i++){
        if(personList[i].age==25){
            console.log(`My name is ${personList[i]['name']}. My email id is ${personList[i]['email']}.`);
        }
    }
}

//    Implement a loop to access and log the city and country of each individual in the dataset.
function printCountryAndCity(personList){

    if(!Array.isArray(personList)){
        console.log("Please enter a valid argument");
        return;
    }

    if(!personList){
        console.log("Please enter a valid argument");
        return;
    }

    if(personList.length==0){
        console.log("The argument array is empty");
        return;
    }

    for(let i=0;i<personList.length;i++){
        console.log(personList[i].country +" "+ personList[i].city);
    }
}

export {emailList,printHobbiesByAge,studentsFromAustralia,detailsAtThree,printAges,firstHobby,detailsOfPerson,printCountryAndCity}