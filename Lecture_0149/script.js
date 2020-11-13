const array = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball","book","pen",],
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape","backpack","pen",],
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball","eraser","pen",],
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book","pen",],
    },
];

console.log("The Original array", array);

// Create an array using forEach that has added an "!" to each of the usernames.

const excitingArray = [];

const addExcitment = array.forEach(
    (newObj) => {
        excitingArray.push(newObj);
    });

console.log("Get Excited",excitingArray);

// Create an array using map that has added a "?" to each of the usernames.

const aQuestion = array.map(
    (newObj) => {
        return newObj;
    });

console.log("Questionable Users", aQuestion);

// Create an array using filter that includes only users on team red.

const gimmeTheRedTeam = array.filter(
    (newObj) => {
        if(newObj.team === "red"){
            return newObj;
        }
    });

console.log("Lets hear it for the Red Team!",gimmeTheRedTeam);

// Using reduce find out what the total score of all users is.