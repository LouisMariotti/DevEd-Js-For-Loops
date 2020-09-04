// Allow us to loop over information

/* At first we need in a for loop to declare a variable by using let
then we need ro do same as a if statement and check if the value is 
for example under 100 in our case bellow, and last we have to increment
with i++  */

//for (let i = 0; i < 100; i++) {
// Run some code, will run over and over, in our example the code will run until 99
/* console.log(i); */
//if (i === 10) {
// console.log("Ten");
// we can use keywork name continue so the code will stop running whan we hit our objective, but need to inverse console.log
// continue;
// break; // same utility as for switch
//}
//console.log(i);
//}

/* const texts = [
  "Singing in the park",
  "Watching myself dance",
  "Hello everyone",
  "cat are black",
]; 

for (let i = 0; i < texts.length; i++) {
  console.log(texts[i]);
} */

/* their are newer and better way of doing loops but this can still
be helpful*/

const names = ["Louis", "Papa", "Mama", "Anakin"];

// for (let name of names) {
// name is the individual name as Papa for example of the array names
// console.log(names.indexOf(name));
//}

// this can be a bit complex so their is another version of this for loop named for each

// Foreach specificaly for arrays

names.forEach(function (name, index) {
  if (name === "Mama") {
    console.log("Hello mum");
    break; // we cannot break inside a function, so for loop way easier to do
  }
});
