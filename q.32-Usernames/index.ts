//=== • Make a list of five or more usernames called current_users.
let curren_users = ["Fatima","Zahra","ali","husnain","areesha"]

//=== • Make another list of five usernames called new_users. Make sure one or 
//===  two of the new usernames are also in the current_users list.
let new_users: string[] = ["fatima","zahra","muhammed","wajeeha","tooba"]
let lowercase = []
for (let x = 0; x < curren_users.length; x++){
  lowercase.push(curren_users[x].toLowerCase())
}

//==== • Loop through the new_users list to see if each new username has already been used
// print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
for(let i = 0; i < new_users.length; i++){
  if(lowercase.includes(new_users[i])){
console.log(`${lowercase[i]} is not availble`);

  } else{
    console.log(`${new_users[i]} is availble`);
    
  } 
}