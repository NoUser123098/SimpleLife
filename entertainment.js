$(function(){
  var job;
  $("#job").html(job);
  $("#bankroll").click(function(){
    job = "Bankroll Prison";
  });
  $("#johns").click(function(){
    job = "John's General Store";
  });
});
