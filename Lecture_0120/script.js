// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

var myArray = ["Banana","Apples","Oranges","Blueberries"];

myArray.shift();
myArray.sort();
myArray.push("Kiwi");
myArray.shift();
myArray.reverse();


myArray.forEach(listingMyArray);


function listingMyArray(item, index) {    
    document.getElementById("myArray").innerHTML += index + ". " + item + "<br>";
}

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

var myArray2 = ["Banana", ["Apples", ["Oranges","Banana"], "Blueberries"]];

/* 
*  I added "Banana" because if you just used myArray2[1][1] you would still get the right answer.
*  But, it isn't exactly the right answer because it returns the hole array at [1][1] and not just
*  "Oranges".
*/

document.getElementById("myArray2").innerHTML = myArray2[1][1][0];