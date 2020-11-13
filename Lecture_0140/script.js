// Global scope (window)
var fun = 5;

// Local scope (Inside of functions or any other object)

function funFunction() {
    var fun = "hello";
    console.log(1,fun);
}

function funnerFunction() {
    var fun = "bye";
    console.log(2,fun);
}

function funnestFunction() {
    fun = "Ahhh!";
    console.log(3,fun);
}

console.log("window", fun);
funFunction();
console.log("window", fun);
funnerFunction();
console.log("window", fun);
funnestFunction();
console.log("window", fun);