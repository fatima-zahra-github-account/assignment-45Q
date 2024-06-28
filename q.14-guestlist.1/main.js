"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to invite to dinner. Then 
//   your list to print a message to each person, inviting them to
//  dinner.
let inviteGuest = ['wajeeha', 'tooba', 'areesha'];
let message = " your are invited at dinner party";
for (let i = 0; i < inviteGuest.length; i++) {
    console.log('miss.' + inviteGuest[i] + message);
}
