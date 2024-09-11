function interestVideoGames(users){
    let userList = [];
    let userNames = Object.keys(users);

    for(let i=0; i<userNames.length;i++){
        let userDetails = users[userNames[i]];
        let userDetailsKeys = Object.keys(userDetails);
        let userInterest = userDetails[userDetailsKeys[2]];
        let str = /Video Games/i;
        if(str.test(userInterest)){
            userList.push(userNames[i]);
        }
    }
    console.log(userList);
}

function stayingInGermany(users){
    let userList = [];
    let userNames = Object.keys(users);

    for(let i=0; i<userNames.length; i++){
        let userNationality = users[userNames[i]].nationality;
        if(userNationality === "Germany"){
            userList.push(userNames[i]);
        }
    }
}

function mastersDegree(users){
    let userList = [];
    let userNames = Object.keys(users);

    for(let i=0;i<userNames.length; i++){
        let userDegree = users[userNames[i]].qualification;
        if(userDegree === "Masters"){
            userList.push(userNames[i]);
        }
    }user
}

function userBasedProgrammingLAnguage(users){

    let userNames = Object.keys(users);

    let language = ['Python', 'Javascript', 'Golang'];

    let usersByLanguages = {
        'Python':[],
        'Javascript':[],
        'Golang':[]
    }

    for(let i=0; i<userNames.length;i++){

        let designation = users[userNames[i]].designation;

        for(let j=0;j<language.length;j++){

            let strToCheck = language[j];

            let regex = new RegExp(strToCheck,i);

            if(designation.match(regex)){
                usersByLanguages[strToCheck].push(userNames[i]);
            }
        } 
    }
}


export {interestVideoGames, stayingInGermany,mastersDegree,userBasedProgrammingLAnguage};
