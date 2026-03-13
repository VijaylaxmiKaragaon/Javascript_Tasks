//loops-------used to iterate a peice of code
// Syntax

// for(initialisation; condition; updation){
//     //do something
// }

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


for(let i=1;i<=5;i++){
    console.log(i);
}

//printing odd numbers
for(let i=1;i<=15;i=i+2){
    console.log(i);
} //1 3 5 7 9 11 13 15

//for printing reverse odd number
for(let i=15;i>=1;i=i-2){
    console.log(i);
}


//print all even numbers(2 to 10)
for(let i=2;i<=10;i=i+2){
    console.log(i);
}

//print the multiplication table for 5
for(let i=5;i<=50;i=i+5){
    console.log(i);
}

let n=Number(prompt("write your number:"))
for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}

//nested for loop
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log(j);
    }
}

//while loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}


let i=2;
while(i<=20){
    console.log(i);
    i=i+2;
}

//favMovie guessing
const favMovie = "avatar";
let guess=prompt("guess my favorite movie");
while((guess != favMovie) && (guess != "quite")){
    // console.log("wrong guess");
    guess = prompt("wrong guess....please try again");
   
}
if(guess == favMovie){
    console.log("congrats..!! you guessed the correct movie");
}
else{
    console.log("you quite");
}

//break statement
let i=1;
while(i<=5){
    if(i == 3){
        break;
    }
    console.log(i);
    i++;
}
console.log("we used break at 3");


const favMovie = "Avatar";
let guess = prompt("guess my favorite movie");

while(guess != favMovie){
    if(guess === "quite"){
        console.log("you quite");
        break;
    }
    guess = prompt("wrong guess. please try again")
}
if(guess == favMovie){
    console.log("congrats!! you guessed correct movie");
}


//loops with arrays
let fruites = ["mango","apple","banana","litchi","orange"];
fruites.push("pineapple");
for(let i=0;i<fruites.length;i++){
    console.log(i, fruites[i]);
}

//array in reverse array
for(let i=fruites.length-1;i>=0 ;i--){
    console.log(i, fruites[i]);
}

let heroes = [
    ["ironmen","spiderman","thor"],
    ["superman","wonder women","flash"]
]

for(let i=0;i<heroes.length;i++){
    console.log(i, heroes[i],heroes[i].length);
    for(let j=0;j<heroes.length;i++){
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}

let student = [["aman", 95],["shradha",94.4],['karan',100]];
for(let i=0;i<student.length;i++){
    for(let j=0;j<student[i].length;j++){
        console.log(student[i][j]);
    }
}

//FOOR OF  LOOP
//collection of objects to extract 