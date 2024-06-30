// More Guests: You just found a bigger dinner table, so now more space is available.Think
//  of three more guests to invite to
//  dinner.
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you
//  need to send out a new set of invitations. You’ll have to think of someone else 
// to invition

let inviteGuest: string[]= ['wajeeha','tooba','areesha']
let message: string = " your are invited at dinner party"
  for(let i = 0; i < inviteGuest.length; i++){
      console.log('miss.' + inviteGuest[i] + message);
    
 }

//  Start with your program from Exerncise 14. Add a print statement at the end of your
//  program stating the name of the guest who can’t
//  make it.

 let absentGuest : string = "wajeeha";
 let newGuest : string = "fatima"
 console.log(`\nNote:
     miss. ${absentGuest} is not coming at dinnr \n`);

//  • Modify your list, replacing the name of the guest who can’t make it with the name of the
//   new person you are inviting

inviteGuest [0] = newGuest

// • Print a second set of invitation messages, one for each person who is still in your list

for(let i = 0; i < inviteGuest.length; i++){
    console.log('miss.' + inviteGuest[i] + message);
}

//q16===

// More Guests: You just found a bigger dinner table, so now more space is available. Think 
// of three more guests to invite to 
// dinner.
console.log('\nwe found a bigger dinner table');
// Add one new guest to the beginning of your array
let perso = inviteGuest.unshift('muskan');
// Add one new guest to the middle of your array.
let person1 = inviteGuest.splice(2,0,'zahra')
// • Use append() to add one new guest to the end of your list.
let person3 = inviteGuest.push('anum');

// • Print a new set of invitation messages, one for each person in your list.
for(let i = 0; i < inviteGuest.length; i++){
    console.log('miss.' + inviteGuest[i] + message);
}
