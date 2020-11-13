var database = [
    {
        username: "aaron",
        password: "supersecret",
    },
    {
        username: "sally",
        password: "123",
    },
    {
        username: "ingrid",
        password: "777",
    },
];

var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning.",
    },
    {
        username: "Sally",
        timeline: "JavaScript is so cool!", 
    },
    {
        username: "Terrance",
        timeline: "It's so rainy today.",
    },
];

var userNamePropt = prompt("What's your user name?");
var passwordPrompt = prompt("what's your password?");

function isUserValid(user, pass) {
    for (let i = 0; i < database.length; i++) {
        if(user === database[i].username && pass === database[i].password){
            return true;
        }              
    }
    return false;
}

function signIn(user,pass) {
    if (isUserValid(user,pass)) {
        console.log(newsfeed);
    } else {
        alert("Name or password is incorrect!")
    }
    
}

signIn(userNamePropt, passwordPrompt);