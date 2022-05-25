function myFunction() {
  console.log('here')
}

// for
var myArr = ["apple", 'banana', 'mango']
for(var i=0; i < myArr.length; i++) {
  console.log(myArr[i])
}
for (var fruit of myArr) {
  console.log(fruit)
}

// while
var answer
while(!answer) {
  var answer = prompt('What is your name')
}