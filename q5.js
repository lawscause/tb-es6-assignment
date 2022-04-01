//Using the spread operator, the Array .map() method, and at least one arrow function to place the values from evens and odds into an array and display the values on a html screen in numerical order.
const evens = [0, 2, 4, 6, 8, 10];
const odds = [1, 3, 5, 7, 9];

//place evens and odds in the same array
const allNums = [...evens, ...odds];
console.log("allNums - created: ", allNums);

//sort the values
allNums.sort((a, b) => {
  return a - b;
});
console.log("allNums - sorted: ", allNums);

//get a reference to the div to place the output
let demo = document.getElementById("demo");

//place the sorted values on the screen
allNums.map((num) => {
  demo.innerHTML += "<p>" + num + "</p>";
});
