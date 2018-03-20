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

(function(window) {
    'use strict';

    var counter, time, timeRemaining, rightAnswers, choicesArray

    let triviaQuestions = [{
            question: "This author of Lord of the Rings was also an Oxford Philologist",
            rightAnswer: "J.R.R. Tolkien",
            wrongAnswer: "George R.R. Martin",
            wrongAnswer: "J.D. Salinger",
            wrongAnswer: "C.S. Lewis"
        },

        {
            question: "Homer J. Simpson's full middle name is:",
            rightAnswer: "Jay",
            wrongAnswer: "John",
            wrongAnswer: "James",
            wrongAnswer: "Jeffrey"
        },

        {
            question: "This famous filmmaker is behind such animation classics as 'Howl's Moving Castle' and 'Castle in the Sky':",
            rightAnswer: "Hiyao Miyazaki",
            wrongAnswer: "John Lassiter",
            wrongAnswer: "Walt Disney",
            wrongAnswer: "Tex Avery"
        },

        {
            question: "This famous Russian-born composer was the only one to both leave and then voluntarily return to the Soviet Union before his death:",
            rightAnswer: "Sergei Prokofiev",
            wrongAnswer: "Igor Stravinsky",
            wrongAnswer: "Dimitri Shostakovitch",
            wrongAnswer: "Pytor Illyich Tchaikovsky"
        },

        {
            question: "This famous psychologist did controversial experiments testing whether subjects would give lethal electric shocks once ordered to by an authority figure:",
            rightAnswer: "Stanley Milgram",
            wrongAnswer: "Philip Zimbardo",
            wrongAnswer: "Sigmund Freud",
            wrongAnswer: "Joseph Mengele"
        },

        {
            question: "The first female Vice-Presidential candidate in U.S. history was:",
            rightAnswer: "Geraldine Ferraro",
            wrongAnswer: "Hillary Clinton",
            wrongAnswer: "Sarah Palin",
            wrongAnswer: "Carly Fiorina"
        },

        {
            question: "The P.T. Anderson film 'There Will Be Blood' was based on which work by Upton Sinclair:?",
            rightAnswer: "Oil!",
            wrongAnswer: "The Jungle",
            wrongAnswer: "The Brass Check",
            wrongAnswer: "The Fountainhead"
        },

        {
            question: "Which of these Shakespeare plays was the basis for Akira Kurosawa's 1985 film 'Ran'?",
            rightAnswer: "King Lear",
            wrongAnswer: "Hamlet",
            wrongAnswer: "The Tempest",
            wrongAnswer: "Romeo and Juliet"
        },

        {
            question: "The individual most often considered the inventor of the computer was also a gay and autistic man named:",
            rightAnswer: "Alan Turing",
            wrongAnswer: "Charles Babbage",
            wrongAnswer: "Bill Gates",
            wrongAnswer: "Steve Jobs"
        },

        {
            question: "This founding figure of sociology also served as a contributing author to the constitution of Germany's short-lived Weimar Republic",
            rightAnswer: "Max Weber",
            wrongAnswer: "Emile Durkheim",
            wrongAnswer: "Raymond Aaron",
            wrongAnswer: "Jurgen Habermas"
        },
    ]

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

    choicesArray = randomQuestionOrder(triviaQuestions);
    console.log(choicesArray);



    function buildGame(triviaQuestions, choicesArray) {
        for (var i = 0; i < triviaQuestions.length; i++) {
            choicesArray[i].push(triviaQuestions[i].wrongAnswer);
            choicesArray[i].push(triviaQuestions[i].rightAnswer);
            $("#questionBox").append("<ul>" + "<li id=" + "triviaQuestions" + i + ">" + triviaQuestions[i].question + "</li>");
            console.log(triviaQuestions);
            console.log(choicesArray);
        }
    }

    buildGame(triviaQuestions)

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





        }) //End document.ready





})(window); // End of IFFE