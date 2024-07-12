"use strict";
let userName = ["fatima", "zahra", "admin", "Ali", "Hasnain"];
for (let a = 0; a < userName.length; a++) {
    if (userName[a] === "admin") {
        console.log("Hello admin, would you like to see a status report");
    }
    else {
        console.log(`Hello ${userName[a]}, thank you for logging in again.\n `);
    }
}
