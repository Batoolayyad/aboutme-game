'use strict';

// welcoming alert 
let userName= prompt("Enter your name, please");
alert ("Welcome "+ userName);
alert("lets play a guessing game, all what you have to do is answering with yes or no ");


// 5(y/n) questions about the owner
let scor=" ";


//Q1
function favFood(){

let favoriteFood =prompt ("Is my favorite food Dawaly?");
favoriteFood= favoriteFood.toLowerCase();

if(favoriteFood=="no"||favoriteFood=="n"){
    alert("Correct");
    scor++
}else if (favoriteFood=="yes"||favoriteFood=="y") {
    alert('Sorry, not correct, my favorite food is Maghshe');
}
else {
    alert("Sorry, but you didn't give an answer");
}
}
favFood();



//Q2
function favColor(){

let favoriteColor =prompt ("Is my favorite color green?");
favoriteColor= favoriteColor.toLowerCase();
if(favoriteColor=='yes'||favoriteColor=='y'){
    alert('correct');
    scor++
}else if (favoriteColor=='no'||favoriteColor=='n'){
    alert('Sorry, not correct');
}else {
    alert("Sorry, but you didn't give an answer");
}
}
favColor(); 


//Q3
function favSport(){

let favoriteSport =prompt ("Is my favorite sport running?");
favoriteSport= favoriteSport.toLowerCase();

if(favoriteSport=="no"||favoriteSport=="n"){
    alert('correct');
    scor++
}else if(favoriteSport=='yes'||favoriteSport=='y') {
    alert("Sorry not correct, I actually hate running");
}else {
    alert("Sorry, but you didn't give an answer");
}
} favSport();


//Q4
function favHobby(){

let favoriteHobby =prompt ("Is my favorite hobby is sleep?");
favoriteHobby= favoriteHobby.toLowerCase();

if(favoriteHobby=='yes'||favoriteHobby=='y'){
    alert('Correct');
    scor++
}else if(favoriteHobby=='no'||favoriteHobby=='n') {
    alert("Sorry, not correct");
}else {
    alert("Sorry, but you didn't give an answer")
}
}favHobby();


//Q5
function favPlace(){

let favoritePlace =prompt ("Is my favorite place to go is the sea?");
favoritePlace= favoritePlace.toLowerCase();

if(favoritePlace=="yes"||favoritePlace=="y"){
    alert('correct');
    scor++
}else if(favoritePlace=='no'||favoritePlace=='n') {
    alert('Sorry, not correct');
}else {
    alert("Sorry, but you didn't give an answer");
}
}favPlace();


//q6:how many cities you think I visit, out of Jordan?; takes only numbers; compare it to the correct no.
function ciNum(){

for (let i=0; i<5; i++ ){

let citiesNumber= prompt ('How many cities do you think I visit out of Jordan? \n  you have 4 attempts')

let answer= 6;

if (citiesNumber==answer){
 alert("correct")
scor++
break;
}else if (citiesNumber<=3){
alert ("too low" );  
}
 else if ( citiesNumber>= 8 ){
alert ("too big" );
}
else if (4<= citiesNumber || citiesNumber<=7){
alert("you are close");
} 
else {
    alert ("enter number please" );}

if (i===3){
    alert('You lost, \n the correct answer is 6 ');
}
}
}ciNum();


//q7: ask abuot the cities that I visit; if the visitor answer one correct break the loop and give the auther correct answers; ig not give him 6 attempts 
function citiesArray(){  

    let cities=["ny","chicago", "philadelphia", "boston", "dc", "wisconsin dells"];
let cityGuesses= null;
let attempts =5;

attemptsNumber:while(attempts){
    
    attempts=attempts-1;
    let cityGuesses= prompt('What are the cities that you think I visited out of Jordan \n you have 6 attembts?');
     cityGuesses=cityGuesses.toLowerCase();
    for (let i=0; i< cities.length; i++){
        if(cityGuesses=== cities[i]){
        alert('great, how did you guess! \n the correct answers' +cities);
    
        scor++
        
        break attemptsNumber;
    }}
if (!attempts){
alert ("you run out of attemts; these are the answers:  \n  ny, chicago, philadelphia, boston, dc, wisconsin dells");
} else {alert("sorry wrong answer");
}
}
}citiesArray();


// giving the user his scor 
alert(`well done ${userName}  your score is ${scor}/7`); 


// alert thanking the visitor for visiting the site 
alert(`${userName} thank you for visiting our website`);


   
    
    
