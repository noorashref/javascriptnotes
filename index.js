let name = "Ashref";
console.log(name.bold());
console.log(name.big());
console.log(name.toUpperCase());

let email1 = "noorashref@gmail.com";
let email2 = "noorashref@gmail.com";

//Find the character of string
let result1 = email1.lastIndexOf("c");
console.log(result1);

//Slice
let result2 = email2.slice(1, 8);
console.log(result2);

//MAth Operation
let pi = 3.14;
console.log(10 / 2);
let result3 = pi * 3;
console.log(result3);

//BidMas Bracket Indices Division multiplication addition subraction
let rr = 5 * (10 * 3) - 5 + 5;
console.log(rr);
rr = rr + 1;
console.log(rr);
rr++;
console.log(rr);
rr += 10;
console.log(rr);

//Array
let ash = ["ashref", "ali", "noora"];
console.log(ash);
console.log(ash[1]);
ash[2] = "fathima";
console.log(ash);
console.log(ash.length);
let jjoin = ash.join("(rr)");
console.log(jjoin);
console.log(ash.indexOf("ali"));

//type conversion
let score = "100";
console.log(score);
score = Number(score);
console.log(score + 1);
console.log(typeof score);
