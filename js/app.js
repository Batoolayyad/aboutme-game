'use strict'

// welcoming alert 
let useName= prompt("Enter your name, please");
alert ("Welcome "+ useName);
alert("lets play a guessing game, all what you have to do is answering with yes or no ");


// 5(y/n) questions about the owner

let favoriteFood =prompt ("Is my favorite food Dawaly?");
favoriteFood= favoriteFood.toLowerCase();

if(favoriteFood=="no"||favoriteFood=="n"){
    //console.log("Correct");
    alert("Correct");
}else if (favoriteFood=="yes"||favoriteFood=="y") {
    //console.log ("Sorry, not correct, my favorite food is Maghshe");
    alert('Sorry, not correct, my favorite food is Maghshe');
}
else {
    //console.log ("Sorry, but you didn't give an answer");
    alert("Sorry, but you didn't give an answer");
}


let favoriteColor =prompt ("Is my favorite color green?");
favoriteColor= favoriteColor.toLowerCase();
if(favoriteColor=='yes'||favoriteColor=='y'){
    //console.log("Correct");
    alert('correct');
}else if (favoriteColor=='no'||favoriteColor=='n'){
    //console.log ("Sorry, not correct");
    alert('Sorry, not correct');
}else {
    //console.log ("Sorry, but you didn't give an answer");
    alert("Sorry, but you didn't give an answer");
}


let favoriteSport =prompt ("Is my favorite sport running?");
favoriteSport= favoriteSport.toLowerCase();

if(favoriteSport=="no"||favoriteColor=="n"){
    //console.log("Correct");
    alert('correct');
}else if(favoriteSport=='yes'||favoriteColor=='y') {
    //console.log ("Sorry not correct, I actually hate running");
    alert("Sorry not correct, I actually hate running");
}else {
    //console.log ("Sorry, but you didn't give an answer");
    alert("Sorry, but you didn't give an answer");
}


let favoriteHobby =prompt ("Is my favorite hobby is sleep?");
favoriteHobby= favoriteHobby.toLowerCase();

if(favoriteHobby=='yes'||favoriteHobby=='y'){
   //console.log("correct");
    alert('Correct');
}else if(favoriteHobby=='no'||favoriteHobby=='n') {
   //console.log ("sorry not correct");
    alert("Sorry, not correct");
}else {
    //console.log ("Sorry, but you didn't give an answer");
    alert("Sorry, but you didn't give an answer")
}


let favoritePlace =prompt ("Is my favorite place to go is the sea?");
favoritePlace= favoritePlace.toLowerCase();

if(favoritePlace=="yes"||favoritePlace=="y"){
    //console.log("correct");
    alert('correct');
}else if(favoritePlace=='no'||favoritePlace=='n') {
    //console.log ("sorry not correct");
    alert('Sorry, not correct');
}else {
    //console.log ("Sorry, but you didn't give an answer");
    alert("Sorry, but you didn't give an answer");
}


// alert thanking the visitor for visiting the site 
alert(useName+ " thank you for visiting our website");

