/*Pseudocode
    We need:
1. A library of trivia questions and answers
2. A basic HTML/CSS interface
    1.buttons
        a. Start/Stop
        b. Reset
        c. Buttons for each choice available (radio)
    2. Style/Theme
3. Questions and Answers
    1. A custom array (seriously!?!?!?)
3. Timer (total time/time remaining)
    1.Starting Time Variable
    2.Time Remaining Variable
4. Score
*/

$(document).ready(function() {
    //'use strict';

    var counter;
    var time;
    var timeRemaining;
    var rightAnswer;
    var choicesArray;

    var triviaQuestions = [{
            question: "This author of Lord of the Rings was also an Oxford philologist",
            rightAnswer: "J.R.R. Tolkien",
            wrongAnswers: ["George R.R. Martin", "J.D. Salinger", "C.S. Lewis"]

        },

        {
            question: "Homer J. Simpson's full middle name is:",
            rightAnswer: "Jay",
            wrongAnswers: ["John", "James", "Jeffrey"]
        },

        {
            question: "This famous filmmaker is behind such animation classics as 'Howl's Moving Castle' and 'Castle in the Sky':",
            rightAnswer: "Hiyao Miyazaki",
            wrongAnswers: ["John Lassiter", "Walt Disney", "Tex Avery"]
        },

        {
            question: "This famous Russian-born composer was the only one to both leave and then voluntarily return to the Soviet Union before his death:",
            rightAnswer: "Sergei Prokofiev",
            wrongAnswers: ["Igor Stravinsky", "Dimitri Shostakovitch", "Pytor Illyich Tchaikovsky"]
        },

        {
            question: "This famous psychologist did controversial experiments testing whether subjects would give lethal electric shocks once ordered to by an authority figure:",
            rightAnswer: "Stanley Milgram",
            wrongAnswers: ["Philip Zimbardo", "Sigmund Freud", "Joseph Mengele"]
        },

        {
            question: "The first female Vice-Presidential candidate in U.S. history was:",
            rightAnswer: "Geraldine Ferraro",
            wrongAnswers: ["Hillary Clinton", "Sarah Palin", "Carly Fiorina"]
        },

        {
            question: "The P.T. Anderson film 'There Will Be Blood' was based on which work by Upton Sinclair:?",
            rightAnswer: "Oil!",
            wrongAnswers: ["The Jungle", "The Brass Check", "The Fountainhead"]
        },

        {
            question: "Which of these Shakespeare plays was the basis for Akira Kurosawa's 1985 film 'Ran'?",
            rightAnswer: "King Lear",
            wrongAnswers: ["Hamlet", "The Tempest", "Romeo and Juliet"]
        },

        {
            question: "The individual most often considered the inventor of the computer was also a gay and autistic man named:",
            rightAnswer: "Alan Turing",
            wrongAnswers: ["Charles Babbage", "Bill Gates", "Steve Jobs"]
        },

        {
            question: "This founding figure of sociology also served as a contributing author to the constitution of Germany's short-lived Weimar Republic",
            rightAnswer: "Max Weber",
            wrongAnswers: ["Emile Durkheim", "Raymond Aaron", "Jurgen Habermas"]
        },
    ]
    console.log(triviaQuestions);

    /*
    function randomQuestionOrder(array) {
        for (var r = array.length - 1; r >= 0; r--) {
            var randomIndex = Math.floor(Math.random() * r + 1);
            var itemAtIndex = array[randomIndex];
            array[randomIndex] = array[r];
            array[r] = itemAtIndex;
        }
        return array;
        console.log(array);
    }
    */

    //choicesArray = randomQuestionOrder(triviaQuestions);



    function buildGame() {
        choicesArray = [];
        for (var i = 0; i < 10; i++) {
            console.log(choicesArray);
            choicesArray = [];
            choicesArray.push(triviaQuestions[i]);
            choicesArray.push(triviaQuestions[i].rightAnswer);
            };
            console.log(choicesArray);
            // $("#choices").append("<li>" + "<input type=" + "radio" + "triviaQuestions" + i +  " value=" + "\"" +  + triviaQuestions[i].question + "</li>");
            console.log(triviaQuestions);

        }

buildGame();

    function finalCountdown(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }

    //timer for questionBox
    $(document).ready(function() {
            setTimeout(function() {
                alert("One minute to answer this simple question fools!")
            }, 1000);
            time = 60;
            $("#timerDisplay").html("00:00");

            function timer() {
                time--;
                timeRemaining = finalCountdown(time);
                $("#timerDisplay").html(timeRemaining);
            }

            counter = setInterval(timer, 1000);


        });


}) //End document.ready





