// Think of something you could store in a array. For example, you could make a list
//  of mountains, rivers, countries, cities, languages, or anything else you’d like. Write
//   a program that creates a list containing these items.
let randomArry = ["mango",25,"apple",true]
console.log(randomArry);
// =====================================
let randomArry2:string[] = []
randomArry2.splice(0,0,"mango","blue barry","apple","orange")
for (let x = 0; x <randomArry2.length; x++) {
    console.log(`we add multiple things in our array .\n`+ randomArry2[x]);
    
    
}