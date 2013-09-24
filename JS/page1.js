$(document).ready(function(){
  $("#signIn").click(function(){
    $("#divsignIn").slideToggle("fast");
    $("#signInContent").slideToggle("medium");
   
  });
  
  $("#signUpButton").click(function(){
  	$("#signInContent").hide();
	$("#signUpContent").slideDown("medium");  
  });

  
  $("#signInButton").click(function(){
  	$("#signUpContent").hide();
	$("#signInContent").slideDown("medium");  
  });

});



