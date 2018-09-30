$(function(){
  var job = $("#jobs");
  $("#bankroll").click(function(){
    job.remove("#one");
    job.append("<li id='one'>Bankroll Prison</li>");
  });
  $("#johns").click(function(){
    job.remove("#two");
    job.append("<li id='two'>John's General Store</li>");
  });
  $("#removeone").click(function(){
    job.remove("#one");
  });
  $("#removetwo").click(function(){
    job.remove("#two");
  });
});
