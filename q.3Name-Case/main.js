"use strict";
let personName = 'fatima';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split(' ').map(word => word.charAt(0).toUpperCase() +
    word.slice(1).toLowerCase()).join(' ');
if (personName !== null && personName !== " ") {
    console.log(`Hello ${personName} Here are your name in :
        lowerCase: ${lowercase}
        upperCase: ${uppercase}
        TitleCase: ${titlecase}`);
}
else {
    console.log('please inter your name !');
}
