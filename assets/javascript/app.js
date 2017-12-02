var total_seconds = 60 * 3;
var c_minutes = parseInt(total_seconds / 60);
var c_seconds = parseInt(total_seconds % 60);

//this is our var that will hold our question div
var questionDOM = $("#displayQuestion");

//vars for correct/incorrect answers
var correct = 0;
var correctDOM = $("#Correct Answers");
var incorrect = 0;
var incorrectDOM = $("#Incorrect Answers");
var unanswered = 0;
var unansweredDOM = $("#Unanswered");
//array for our questions
var question = [{
        question: "Who played Ray in Ghostbusters?",
        answers: ["John Belushi", "Chevy Chase", "Bill Murray", "Dan Aykroyd"],
        correct: "Dan Aykroyd"
    },
    {
        question: 'In what movie did Brad Pitt say, "Sticking feathers up your butt does not make you a chicken?"',
        answers: ["Ocean's Eleven", "Snatch", "Fight Club", "Moneyball"],
        correct: "Fight Club"
    },
    {
        question: 'Who plays Spock in the new Star Trek movies?',
        answers: ["Zachary Quinto", "Chris Pine", "Karl Urban", "Anton Yelchin"],
        correct: "Zachary Quinto"
    },
    {
        question: 'What famous candy bar did Bill Murray fish out of the pool in Caddyshack?',
        answers: ["3 Musketeers", "Payday", "Snickers", "Baby Ruth"],
        correct: "Baby Ruth"
    },
    {
        question: 'What is the name of the camp featured in Friday the 13th?',
        answers: ["Crystal Lake", "Camp Slaughter", "Camp Nowhere", "Camp North Star"],
        correct: "Crystal Lake"
    },
    {
        question: 'What fell out of the sky and landed on the house in the  opening scene of Donnie Darko?',
        answers: ["A meteorite", "A plane engine", "A bird", "A cow"],
        correct: "A plane engine"
    },
    {
        question: 'What year did Michael J. Fox travel back to in the movie "Back to the Future"?',
        answers: ["1944", "1955 ", "1966", "1977"],
        correct: "1955 "
    },
]

function CheckTime() {
    document.getElementById("quiz-time-left").innerHTML = 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds';
    if (total_seconds <= 0) {
        setTimeout('document.quiz.submit()', 1);
    } else {
        total_seconds = total_seconds - 1;
        c_minutes = parseInt(total_seconds / 60);
        c_seconds = parseInt(total_seconds % 60);
        setTimeout("CheckTime()", 1000);
    }
}

function startGame() {
    $("#start").remove()
    setTimeout(CheckTime, 1000);
    for (var i = 0; i < question.length; i++) {
        var div = $("<div>")
        div.append(question[i].question)
        div.append($("<br>"))
        for (var j = 0; j < question[i].answers.length; j++) {
            var radioBtn = $('<input type="radio" name="question-' + i + '" value="' + question[i].answers[j] + '">' + question[i].answers[j] + '</input>');
            div.append(radioBtn);
        }
        //this will be our question
        div.append($("<hr>"))
        questionDOM.append(div);
    }
    $("#doneBtn").append($("<button>").attr("id", "done").text("done"))
}
$("#start").on("click", startGame)

$("#doneBtn").on("click", "#done", function() {

    console.log("hey you clicked done");
    console.log($('input[name="question-0"]:checked').val());
    if ($('input[name="question-0"]:checked').val() == question[0].correct) {
        correct++
    } else {
        incorrect++
        
    }
    console.log($('input[name="question-1"]:checked').val());
    if ($('input[name="question-1"]:checked').val() == question[1].correct) {
        correct++
    } else {
        incorrect++
    }
    console.log($('input[name="question-2"]:checked').val());
    if ($('input[name="question-2"]:checked').val() == question[2].correct) {
        correct++
    } else {
        incorrect++
    }
    console.log($('input[name="question-3"]:checked').val());
    if ($('input[name="question-3"]:checked').val() == question[3].correct) {
        correct++
    } else {
        incorrect++
    }
    console.log($('input[name="question-4"]:checked').val());
    if ($('input[name="question-4"]:checked').val() == question[4].correct) {
        correct++
    } else {
        incorrect++
    }
    console.log($('input[name="question-5"]:checked').val());
    if ($('input[name="question-5"]:checked').val() == question[5].correct) {
        correct++
    } else {
        incorrect++
    }
    console.log($('input[name="question-6"]:checked').val());
    if ($('input[name="question-6"]:checked').val() == question[6].correct) {
        correct++
    } else {
        incorrect++
    }

    console.log(incorrect, "this is incorrect");
    console.log(correct, "this is correct");
    console.log(unanswered, "unanswered");
    ///make place in DOM to store the incorrect/correct/unanswered
})

//we need to find out what button they clicked on and get that value