function interestVideoGames(arr){
    let userList = [];
    let userNames = Object.keys(arr);

    for(let i=0; i<userNames.length;i++){
        let userDetails = users[userNames[i]];
        let userDetailsKeys = Object.keys(userDetails);
        let userInterest = userDetails[userDetailsKeys[2]];
        let str = /Video Games/i;
        if(str.test(userInterest)){
            userList.push(userNames[i]);
        }
    }
}

function stayingInGermany(arr){
    let userList = [];
    let userNames = Object.keys(arr);

    for(let i=0; i<userNames.length; i++){
        let userNationality = arr[userNames[i]].nationality;
        if(userNationality === "Germany"){
            userList.push(userNames[i]);
        }
    }
}

function mastersDegree(arr){
    let userList = [];
    let userNames = Object.keys(arr);

    for(let i=0;i<userNames.length; i++){
        let userDegree = arr[userNames[i]].qualification;
        if(userDegree === "Masters"){
            userList.push(userNames[i]);
        }
    }user
}

function userBasedProgrammingLAnguage(arr){

    let userNames = Object.keys(arr);

    let language = ['Python', 'Javascript', 'Golang'];

    let usersByLanguages = {
        'Python':[],
        'Javascript':[],
        'Golang':[]
    }

    for(let i=0; i<userNames.length;i++){

        let designation = arr[userNames[i]].designation;

        for(let j=0;j<language.length;j++){

            let strToCheck = language[j];

            let regex = new RegExp(strToCheck,i);

            if(designation.match(regex)){
                usersByLanguages[strToCheck].push(userNames[i]);
            }
        } 
    }
}


module.exports = {interestVideoGames, stayingInGermany,mastersDegree,userBasedProgrammingLAnguage};
