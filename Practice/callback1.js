//funtion
function greet(name, callback) {
  console.log('hi '+ name);
  callback();
}
//callback function
function callMe() {
  console.log('callback function');
}
//passing function as argument
greet('peter',callMe);