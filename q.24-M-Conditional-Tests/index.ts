//==== • Tests for equality and inequality with strings =====
console.log("fatima" as string === "zahra"); //false

//===== Tests for inequality =======
console.log("fzk" as string != "hasnain"); // true

//====== • Tests using the lower case function =======
console.log("Fatima".toLowerCase() === "fatima"); // true

// ==• Numerical tests involving equality and inequality, greater than ====
// == and less than, greater than or equal to, and less than or equal to ====
console.log(369 === 369); // true

//  ==• Numerical tests involving inequality
console.log( 30 as number !=  35);// true
 
// ==== greater than and less than  ======
console.log(100 < 90 ); // false
//less than
console.log(50 < 100); // true

//=====  greater than and less than, greater than or equal to,=====
//====  and less than or equal to =====
console.log(100 >= 100); // true

// ==== less than or equal
console.log(50 <= 70 );// true

//==== • Tests using "and" and "or" operators ========
console.log(9 === 9 && 6===6);//true
console.log( 20 < 10 || 8 > 10);//false

//• Test whether an item is in a array
let my_name = ["fatima","zahra","ali"]
console.log(my_name.includes("zahra") === true);//true
//• Test whether an item is not in a array
console.log(my_name.includes("wajeeha") ===false);//false






























