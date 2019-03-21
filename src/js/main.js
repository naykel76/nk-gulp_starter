function cl(str) {
  console.log(str);
}


function checkIsNum(val) {
  if (isNaN(val)) {
    return false;
  } else {
    return true;
  }
}

/* 
function testScope() {

  for (var i = 0; i < 10; i++) {}
  console.log(i); // logs 10

  for (var i = 0; i < 5; i++) { }
  console.log(i); // logs 5

  var x = 10;
  var x = 5;
  console.log(x) // logs 5

}

testScope();
 */
