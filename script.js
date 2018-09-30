$(function(){
  var job = $("#jobs");
  $("#bankroll").click(function(){
    job.append("<li>Bankroll Prison</li>");
  });
  $("#johns").click(function(){
    job.append("<li>John's General Store</li>");
  });
});
