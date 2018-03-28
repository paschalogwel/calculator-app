var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
}
var multiply = function(number1, number2) {
  return number1 * number2;
}
var division = function(number1, number2) {
  return number1 / number2;
}
var modulus = function(number1, number2) {
  return number1 % number2;
}
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault()
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault()
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2);
    $("#output2").text(result);
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault()
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#output3").text(result);
  });
  $("form#division").submit(function(event) {
    event.preventDefault()
    var number1 = parseInt($("#division1").val());
    var number2 = parseInt($("#division2").val());
    var result = division(number1, number2);
    $("#output4").text(result);
  });
  $("form#modulus").submit(function(event) {
    event.preventDefault()
    var number1 = parseInt($("#modulus1").val());
    var number2 = parseInt($("#modulus2").val());
    var result = modulus(number1, number2);
    $("#output5").text(result);
  });
});
