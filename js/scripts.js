$(document).ready(function(){
  $("form#submitSurvey").submit(function(event) {
  event.preventDefault();
  var beverage = $("#beverage").parseInt(val());
  var treat = $("#treat").val();
  var time = $("#time").(val();
  var day = $("#day").(val();
  var school = $("#school").val();

  var userScore = addScore(beverageScore, treatScore, timeScore, dayScore, schoolScore);

  if (userScore <10= ) {
    (destination = "Lisbon, Portugal!");
  }
  else if (userScore >=16) {
    (destination = "Tokyo, Japan!");
  }
  else {
    (destination = "Mexico City, Mexico!");
  }

  $("#output").text(result);

})
