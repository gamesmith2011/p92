function addUser(){
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;

  localStorage.setItem("player1_name", player1_name);
  localStorage.setItem("player1_name", player1_name);

  window.location = "game_page.html";
}
Question_turn = "player1";
answer_turn = "player2"
function check(): any
  get_answer = document.getElementById("input_check_box").value
if(get_answer = actual_answer)
{
  if(answer_turn == "player1")
  {
    update_player_score = player1_score +1;
    document.getElementById("player1_score").innerHTML =  update_player1_score;
  }
  else
  {
    update_player2_score = player2_score +1;
    document.getElementById("player2_score").innerHTML = update_player1_score;
  }
}
if(Question_turn) == "player1"
{
  Question_turn = "player2"
  document.getElementById("player_question").innerHTML = "Qustion Turn -" + player1_name;
}
