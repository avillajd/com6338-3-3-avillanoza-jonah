function sayHello(name) {
  // what does this function do?
  // use console.log to find out
  name = name[0].toUpperCase() + name.slice(1)
  console.log(name)
  var greeting = "Hello, "
  var namedGreeting = greeting + name
  return namedGreeting
}

var greeting = sayHello("sally")
console.log(greeting)

function countWords(str) {
  // what does this function do?
  // open devtools, write debugger in this function,
  // and run the code to find out
  var noPuncStr = str.replace(/[\.,;:()\"\?\!&]/g, "")
  var wordArr = noPuncStr.split(" ")
  var count = {}
  wordArr.forEach(function(word) {
    var lowerWord = word.toLowerCase()
    if (lowerWord in count) {
      count[lowerWord]++
    } else {
      count[lowerWord] = 1
    }
  })
  return count
}
var paragraph = "Fear leads to anger; anger leads to hatred; hatred leads to conflict; conflict leads to suffering."

var wordCount = countWords(paragraph)
console.log(wordCount)