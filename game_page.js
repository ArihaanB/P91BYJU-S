function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";

input_box = "<br> Answer : <input type = 'text' id = 'input_check_box'>"

check_button = "<br> <br> <button clss = 'btn btn-info' onclick = 'check()'>Check<button>"

row = question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;

document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}
player1_name = document.getElementById("player1_name_input").value;
player2_name = document.getElementById("player2_name_input").value;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_question").innerHTML = "Answer Turn - " + player2_name;

function check(){
    answer = document.getElementById("input_check_box").value;
    
    if(answer == actual_answer){
        
    }
}