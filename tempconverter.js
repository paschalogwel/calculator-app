var number2=1.8;
var number3=32;
var temperature=function(celcius, number2, number3) {

	return celcius * (number2) + number3;
  };
  var celcius=parseInt(prompt("enter temperature in celcius"));
  var result=temperature(celcius, number2, number3)

  alert(result);
