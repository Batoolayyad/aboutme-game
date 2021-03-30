'use strict';

// welcoming alert 
let userName= prompt("Enter your name, please");
alert ("Welcome "+ userName);
alert("lets play a guessing game, all what you have to do is answering with yes or no ");


// 5(y/n) questions about the owner
let scor=0


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


let favoriteSport =prompt ("Is my favorite sport running?");
favoriteSport= favoriteSport.toLowerCase();

if(favoriteSport=="no"||favoriteColor=="n"){
    //console.log("Correct");
    alert('correct');
    scor++
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
    scor++
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
    scor++
}else if(favoritePlace=='no'||favoritePlace=='n') {
    //console.log ("sorry not correct");
    alert('Sorry, not correct');
}else {
    //console.log ("Sorry, but you didn't give an answer");
    alert("Sorry, but you didn't give an answer");
}



//q6:how many cities you think I visit, out of Jordan?; takes only numbers; compare it to the correct no.



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
else if (3< citiesNumber <9){
alert("you are close, try agin");
} 
else {
    alert ("enter number please" );}

}



//q7: ask abuot the cities that I visit; if the visitor answer one correct break the loop and give the auther correct answers; ig not give him 6 attempts 
    
let cities=["ny","chicago", "philadelphia", "boston", "dc", "wisconsin dells"];
let correctAnswer=0;

let userRight=true;

let cityGuesses= prompt('What are the cities that you think I visited out of Jordan?');
cityGuesses=cityGuesses.toLowerCase();

while(correctAnswer < 6){
    for (let i=0; i< cities.length; i++){
    if(cityGuesses=== cities[i]){
        alert('great, how did you guess!');
        correctAnswer=6;
        score=score+1;
        userRight=false;
        break;
    }
    }
    correctAnswer++;
    if( correctAnswer < 6 && userRight===true) {
    cityGuesses= prompt('I wish if I did visit this city, but I never have been there \n please try again :');
    }
    if(correctAnswer >= 6 && userRight===true){
    alert('You lost');
    }

}

alert ("these are the cities I visited before: \n ny, chicago, philadelphia, boston, dc, wisconsin dells")

// giving the user his scor 
alert('well done '+userName+' \n your score is '+scor+'/7'); 


// alert thanking the visitor for visiting the site 
alert(userName+ " thank you for visiting our website");


    
    
    
