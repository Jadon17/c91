var player1_name = localStorage.getItem("name1");
var player2_name = localStorage.getItem("name2");

score_1 = 0;
score_2 = 0;

document.getElementById("player1_name").innerHTML= player1_name + " : " ;
document.getElementById("player2_name").innerHTML= player2_name + " : " ;

document.getElementById("player1_score").innerHTML = score_1;
document.getElementById("player2_score").innerHTML = score_2;

document.getElementById("player_q").innerHTML = "Question Turn = " + player1_name;
document.getElementById("player_a").innerHTML = "Answer Turn = " + player2_name;

function send(){

Number_1 = document.getElementById("number_1").value;
Number_2 = document.getElementById("number_2").value;

console.log("Number 1 = " + Number_1);
console.log("Number 2 = " + Number_2);

actual_answer = parseInt(Number_1) * parseInt(Number_2);

question = "<h4>" + Number_1 + " x " + Number_2 + "</h4>" ;

input_box = "<br>Answer : <input type= 'number' >";

check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()' > Check </button> ";

row = question + input_box + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("number_1").innerHTML = ""
document.getElementById("number_2").innerHTML = ""

   }