"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you
//  need to send out a new set of invitations. You’ll have to think of someone else 
// to invition
let inviteGuest = ['wajeeha', 'tooba', 'areesha'];
let message = " your are invited at dinner party";
for (let i = 0; i < inviteGuest.length; i++) {
    console.log('miss.' + inviteGuest[i] + message);
}
//  Start with your program from Exerncise 14. Add a print statement at the end of your
//  program stating the name of the guest who can’t
//  make it.
let absentGuest = "wajeeha";
let newGuest = "fatima";
console.log(`\nNote:
     miss. ${absentGuest} is not coming at dinnr \n`);
//  • Modify your list, replacing the name of the guest who can’t make it with the name of the
//   new person you are inviting
inviteGuest[0] = newGuest;
// • Print a second set of invitation messages, one for each person who is still in your list
for (let i = 0; i < inviteGuest.length; i++) {
    console.log('miss.' + inviteGuest[i] + message);
}
//q16===
// More Guests: You just found a bigger dinner table, so now more space is available. Think 
// of three more guests to invite to 
// dinner.
console.log('\nwe found a bigger dinner table');
// Add one new guest to the beginning of your array
let person1 = inviteGuest.unshift('muskan');
// Add one new guest to the middle of your array.
let person2 = inviteGuest.splice(2, 0, 'zahra');
// • Use append() to add one new guest to the end of your list.
let person3 = inviteGuest.push('anum');
// • Print a new set of invitation messages, one for each person in your list.
for (let i = 0; i < inviteGuest.length; i++) {
    console.log('miss.' + inviteGuest[i] + message);
}
//Q.17=== Add a new line that prints a message saying that you can invite only two people for
//  dinner
console.log('\n sorry we can not arrange a big table. we can invite only tow people. ');
//Remove guests from your list one at a time until only two names remain in your list.
while (inviteGuest.length > 2) {
    let removeGuest1 = inviteGuest.pop();
    console.log(`sorry miss. ${removeGuest1}. you are not invited at dinne`);
}
// print a message to that person letting them know you’re sorry you can’t invite them to
//  dinner
for (let i = 0; i < inviteGuest.length; i++) {
    console.log('miss.' + inviteGuest[i] + '\n you aer still invited to dinner. ');
}
// • Remove the last two names from your list, so you have an empty list
let removeGuest2 = inviteGuest.splice(0, 2);
//to make sure you actually have an empty list at the end of your program.
console.log(inviteGuest);
// =====Q.19
//  Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a 
// message indicating the number of people you are inviting to dinner.
console.log(`currently, we are iviting ${inviteGuest.length} guest to the dinner`);
