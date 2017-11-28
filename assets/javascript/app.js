/*Pseudocode
    We need:

1. A library of trivia questions and answers
2. A basic HTML/CSS interface
    1.buttons
        a. Start/Stop
        b. Reset
        c. Buttons for each choice available
    2. Style/Theme
3. Questions and Answers
    1. A custom array (seriously!?!?!?)
3. Timer (total time/time remaining)
    1.Starting Time Variable
    2.Time Remaining Variable
4. Score
*/

let triviaQuestions = [
    {question1: "This author of Lord of the Rings was also an Oxford Philosogist", rightAnswer: "J.R.R. Tolkien", wrongAnswer1: "George R.R. Martin", wrongAnswer2: "J.D. Salinger", wrongAnswer3: "C.S. Lewis"},
    {question2: "Homer J. Simpson's full middle name is:", rightAnswer: "Jay", wrongAnswer1: "John", wrongAnswer2: "James", wrongAnswer3: "Jeffrey"}

]

$("#questionBox").append("<ul>" + "<li>" + triviaQuestions[0].question1);
    console.log(triviaQuestions[0].question1)





