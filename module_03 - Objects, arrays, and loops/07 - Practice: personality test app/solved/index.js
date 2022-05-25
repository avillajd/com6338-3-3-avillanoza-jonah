function personalityTest() {
  var questions = [
    "You enjoy movies with happy endings.",
    "Most days, you are happy with life.",
    "You think most people are fundamentally good.",
    "You are slow to anger.",
    "You get along with most people.",
  ]
  var trueAnswers = 0;
  for(var i = 0; i < questions.length; i++) {
    var answer = confirm(questions[i])
    if (answer) {
      trueAnswers++
    }
  }
  if (trueAnswers >= 3) {
    alert('You are an optimist!')
  } else {
    alert('You are a bit of a pessimist...')
  }
}
