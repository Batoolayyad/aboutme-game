'use strict';

// welcoming alert 
let userName= prompt("Enter your name, please");
alert ("Welcome "+ userName);
alert("lets play a guessing game, all what you have to do is answering with yes or no ");


// 5(y/n) questions about the owner
let scor=" ";

function favFood(){
let favoriteFood =prompt ("Is my favorite food Dawaly?");
favoriteFood= favoriteFood.toLowerCase();

if(favoriteFood=="no"||favoriteFood=="n"){
    //console.log("Correct");
    alert("Correct");
    scor++
}else if (favoriteFood=="yes"||favoriteFood=="y") {
    //console.log ("Sorry, not correct, my favorite food is Maghshe");
    alert('Sorry, not correct, my favorite food is Maghshe');
}
else {
    //console.log ("Sorry, but you didn't give an answer");
    alert("Sorry, but you didn't give an answer");
}
}
favFood();

//Q2
function favColor(){
let favoriteColor =prompt ("Is my favorite color green?");
favoriteColor= favoriteColor.toLowerCase();
if(favoriteColor=='yes'||favoriteColor=='y'){
    //console.log("Correct");
    alert('correct');
    scor++
}else if (favoriteColor=='no'||favoriteColor=='n'){
    //console.log ("Sorry, not correct");
    alert('Sorry, not correct');
}else {
    //console.log ("Sorry, but you didn't give an answer");
    alert("Sorry, but you didn't give an answer");
}
}
favColor(); 

//Q3
function favSport(){

let favoriteSport =prompt ("Is my favorite sport running?");
favoriteSport= favoriteSport.toLowerCase();

if(favoriteSport=="no"||favoriteSport=="n"){
    //console.log("Correct");
    alert('correct');
    scor++
}else if(favoriteSport=='yes'||favoriteSport=='y') {
    //console.log ("Sorry not correct, I actually hate running");
    alert("Sorry not correct, I actually hate running");
}else {
    //console.log ("Sorry, but you didn't give an answer");
    alert("Sorry, but you didn't give an answer");
}
} favSport();

//Q4
function favHobby(){

let favoriteHobby =prompt ("Is my favorite hobby is sleep?");
favoriteHobby= favoriteHobby.toLowerCase();

if(favoriteHobby=='yes'||favoriteHobby=='y'){
   //console.log("correct");
    alert('Correct');
    scor++
}else if(favoriteHobby=='no'||favoriteHobby=='n') {
   //console.log ("sorry not correct");
    alert("Sorry, not correct");
}else {
    //console.log ("Sorry, but you didn't give an answer");
    alert("Sorry, but you didn't give an answer")
}
}favHobby();

//Q5
function favPlace(){

let favoritePlace =prompt ("Is my favorite place to go is the sea?");
favoritePlace= favoritePlace.toLowerCase();

if(favoritePlace=="yes"||favoritePlace=="y"){
    //console.log("correct");
    alert('correct');
    scor++
}else if(favoritePlace=='no'||favoritePlace=='n') {
    //console.log ("sorry not correct");
    alert('Sorry, not correct');
}else {
    //console.log ("Sorry, but you didn't give an answer");
    alert("Sorry, but you didn't give an answer");
}
}favPlace();

//q6:how many cities you think I visit, out of Jordan?; takes only numbers; compare it to the correct no.
function ciNum(){

for (let i=0; i<5; i++ ){

let citiesNumber= prompt ('How many cities you think I visit out of Jordan?')

let answer= 6;

if (citiesNumber==answer){
 alert("correct")
scor++
break;
}else if (citiesNumber<=2){
alert ("too low, try agian" );  
}
 else if ( citiesNumber>= 10 ){
alert ("too big, try agian" );
}
else if (3<= citiesNumber || citiesNumber<=9){
alert("you are close, try agin");
} 
else {
    alert ("enter number please" );}

if (i===4){
    alert('You lost, \n the correct answer is 6 ');
}
}
}ciNum();

//q7: ask abuot the cities that I visit; if the visitor answer one correct break the loop and give the auther correct answers; ig not give him 6 attempts 
 // function citiesArray(){  
let cities=["ny","chicago", "philadelphia", "boston", "dc", "wisconsin dells"];
let cityGuesses= null;
let attempts =6;

attemptsNumber:while(attempts){
    
    attempts=attempts-1;
    let cityGuesses= prompt('What are the cities that you think I visited out of Jordan \n you have 6 attembts?');
     cityGuesses=cityGuesses.toLowerCase();
    for (let i=0; i< cities.length; i++){
        if(cityGuesses=== cities[i]){
        alert('great, how did you guess! \n the correct answers' +cities);
    
        scor++
        
        break attemptsNumber;
    }
    

if (!attempts){
alert ("you run out of attemts; these are answers: \n ny, chicago, philadelphia, boston, dc, wisconsin dells");
}  
alert("sorry wrong answer, try again");
}
}
//} citiesArray();
// giving the user his scor 
alert(`well done ${userName}  your score is ${scor}/7`); 


// alert thanking the visitor for visiting the site 
alert(`${userName} thank you for visiting our website`);


   
    
    
