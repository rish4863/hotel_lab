$(document).ready(function () {
  $("#greetingOutput").text("");

  $("#sendName").click(function () {
    //console.log($("#fname").val());
    $("#greetingOutput").text("Hello " + $("#fname").val() +" "+ $("#lname").val() +" Your email address  and your birthdate are: "+ $ ("#emailaddress").val()+  " "+ $("#dateofbirth").val() );
    
  });
});

 
 