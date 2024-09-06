const {emailList,printHobbiesByAge,studentsFromAustralia,detailsAtThree,printAges,firstHobby,detailsOfPerson,printCountryAndCity} = require ("./drill-1-solution");

const arrayOfObjects = [
    { 
       id: 1, 
       name: 'Alice', 
       age: 30,
       email: 'alice@example.com',
       city: 'New York',
       country: 'USA',
       hobbies: ['reading', 'painting'],
       isStudent: false
    },
    { 
       id: 2, 
       name: 'Bob', 
       age: 25,
       email: 'bob@example.com',
       city: 'London',
       country: 'UK',
       hobbies: ['playing guitar', 'hiking'],
       isStudent: true
    },
    { 
       id: 3, 
       name: 'Charlie', 
       age: 35,
       email: 'charlie@example.com',
       city: 'Paris',
       country: 'France',
       hobbies: ['cooking', 'gardening'],
       isStudent: false
    },
    { 
       id: 4, 
       name: 'David', 
       age: 28,
       email: 'david@example.com',
       city: 'Berlin',
       country: 'Germany',
       hobbies: ['photography', 'traveling'],
       isStudent: true
    },
    { 
       id: 5, 
       name: 'Eve', 
       age: 32,
       email: 'eve@example.com',
       city: 'Sydney',
       country: 'Australia',
       hobbies: ['yoga', 'surfing'],
       isStudent: false
    },
    { 
       id: 6, 
       name: 'Frank', 
       age: 33,
       email: 'frank@example.com',
       city: 'Los Angeles',
       country: 'USA',
       hobbies: ['playing basketball', 'reading'],
       isStudent: true
    },
    { 
       id: 7, 
       name: 'Grace', 
       age: 29,
       email: 'grace@example.com',
       city: 'Toronto',
       country: 'Canada',
       hobbies: ['painting', 'running'],
       isStudent: false
    },
    { 
       id: 8, 
       name: 'Hannah', 
       age: 31,
       email: 'hannah@example.com',
       city: 'Melbourne',
       country: 'Australia',
       hobbies: ['writing', 'knitting'],
       isStudent: true
    },
    { 
       id: 9, 
       name: 'Ivy', 
       age: 27,
       email: 'ivy@example.com',
       city: 'Tokyo',
       country: 'Japan',
       hobbies: ['playing piano', 'cooking'],
       isStudent: false
    },
    { 
       id: 10, 
       name: 'Jack', 
       age: 34,
       email: 'jack@example.com',
       city: 'Mumbai',
       country: 'India',
       hobbies: ['playing cricket', 'watching movies'],
       isStudent: true
    }
  ];


//Test Cases

//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
//Test case 1 => Checking for expected output:
  emailList(arrayOfObjects);

//Test case 2 => passing no arguments
   emailList();

//Test case 3 => passing an empty list
   emailList([]);

//Test case 4 => passing an invalid argument
   emailList("Hi");

/*------------------------------------------------------------------------------------------------------------------------------------------*/

//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

//Test case 1 (Checking for expected output):
   printHobbiesByAge(arrayOfObjects,25);

//Test case 2 => passing no arguments
   printHobbiesByAge();

//Test case 3 => passing an empty list
   printHobbiesByAge([]);

//Test case 4 => passing an invalid argument
   printHobbiesByAge("Hi");

/*------------------------------------------------------------------------------------------------------------------------------------------*/

//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

//Test case 1 (Checking for expected output):
   studentsFromAustralia(arrayOfObjects,25);

//Test case 2 => passing no arguments
   studentsFromAustralia();

//Test case 3 => passing an empty list
   studentsFromAustralia([]);

//Test case 4 => passing an invalid argument
   studentsFromAustralia("Hi");

/*------------------------------------------------------------------------------------------------------------------------------------------*/

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

//Test case 1 (Checking for expected output):
   detailsAtThree(arrayOfObjects);

//Test case 2 => passing no arguments
   detailsAtThree();

//Test case 3 => passing an empty list
   detailsAtThree([]);

//Test case 4 => passing an invalid argument
   detailsAtThree("Hi");

/*------------------------------------------------------------------------------------------------------------------------------------------*/

//    Implement a loop to access and print the ages of all individuals in the dataset.

//Test case 1 (Checking for expected output):
   printAges(arrayOfObjects);

//Test case 2 => passing no arguments
   printAges();

//Test case 3 => passing an empty list
   printAges([]);

//Test case 4 => passing an invalid argument
   printAges("Hi");

/*------------------------------------------------------------------------------------------------------------------------------------------*/

//    Create a function to retrieve and display the first hobby of each individual in the dataset.

//Test case 1 (Checking for expected output):
   firstHobby(arrayOfObjects);

//Test case 2 => passing no arguments
   firstHobby();

//Test case 3 => passing an empty list
   firstHobby([]);

//Test case 4 => passing an invalid argument
   firstHobby("Hi");

/*------------------------------------------------------------------------------------------------------------------------------------------*/

//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

//Test case 1 (Checking for expected output):
   detailsOfPerson(arrayOfObjects);

//Test case 2 => passing no arguments
   detailsOfPerson();

//Test case 3 => passing an empty list
   detailsOfPerson([]);

//Test case 4 => passing an invalid argument
   detailsOfPerson("Hi");

/*------------------------------------------------------------------------------------------------------------------------------------------*/

//    Implement a loop to access and log the city and country of each individual in the dataset.

//Test case 1 (Checking for expected output):
   printCountryAndCity(arrayOfObjects);

//Test case 2 => passing no arguments
   printCountryAndCity();

//Test case 3 => passing an empty list
   printCountryAndCity([]);

//Test case 4 => passing an invalid argument
   printCountryAndCity("Hi");

/*------------------------------------------------------------------------------------------------------------------------------------------*/
