var bucket = 3

console.log(bucket)

if (true) {
  console.log(bucket)
}

function myFunction() {
  var innerVar = 'inside'
  console.log(bucket)
  console.log(innerVar)
}

myFunction()
// console.log(innerVar)

while(bucket < 10) {
  alert("bucket is now " + bucket)
  bucket++
}
