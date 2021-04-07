//create an empty object
let convert = {};

//converting Celsius to Fahrenheit
cToF = function(celsius){
  if(!Number.isInteger(celsius)) return undefined;
  return celsius * 9 / 5 + 32;
}
//converts Fahrenheit to Celsius
convert.fToC = function(fahrenheit){
  if(!Number .isInteger(fahrenheit)) return undefined;
  return (fahrenheit - 32) * 5 / 9;
}
//to return object as the result of a require call
module.exports = convert;