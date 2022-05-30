    var questionsArr = [
        {
            question: 'JavaScript is the best language',
            answer: true
        },
        {
            question: 'There are 52 weeks in a year.' ,
            answer: true
        },
        {
            question: 'Monotremes, which only include the semid-aquatic platypus and echidnas, share a unique trait: egg laying.',
            answer: true
        },
        {
            question: 'The diameter of a basketball hoop is 16 inches.',
            answer: false
        },
        {
            question: 'The next Leap Year is 2023.' ,
            answer: false
        },
    ];
    function runQuiz() {
        var choice = 0;
        for(var i = 0; i < questionsArr.length; i++){
            if(confirm(questionsArr[i].question) == questionsArr[i].answer){
                choice++;
            };
        }
        var score = Math.round((choice/questionsArr.length)*100);
        alert("You have answered " + score + "% correct.");
    }




    // // Troubleshooting Having a hard time with this one
    // // function runQuiz() {
    // //     var choice = 0 // from the example... 
    // //     for(var i = 0, i < questionsArr.length; i ++) {
    // //         if(confirm(questionsArr[i].question)=== questionsArr[i].answer){
    // //             choice++
    // //         };

    // //     }
    // //     var score = Math.round((choice/questionsArr.length)*100);
    // //     alert("You have answered" + score + "%")

    // //}
    
//    var questionsArr = [
//     {
//         question: 'is the moon a planet?',
//         answer: false
//     }, 
//     {
//         question: 'the year is 2022.',
//         answer: true
//     },
//     {
//         question: 'dogs sweat out of their skin.',
//         answer: false
//     },
//     {
//         question: 'red is a primary color.',
//         answer: true
//     },
//     {
//         question: 'Pokemon was a cartoon orginating in the UK.',
//         answer: false
//     },
// ];
// function runQuiz() {
//     var numOfAgrees = 0;
//     for (var i = 0; 0 < questionsArr.length; i++){
//         if(confirm(questionsArr[i].question) == questionsArr.answer){
//             numOfAgrees++;
//         };
//     }
        
//         var score = Math.round(numOfAgrees/questionsArr.question)*100;
//         alert ('You scored' + score + '% of the questions correct!' )
//     }
