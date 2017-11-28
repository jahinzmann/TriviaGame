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
    {question2: "Homer J. Simpson's full middle name is:", rightAnswer: "Jay", wrongAnswer1: "John", wrongAnswer2: "James", wrongAnswer3: "Jeffrey"},
    {question3: "This famous filmmaker is behind such animation classics as 'Howl's Moving Castle' and 'Castle in the Sky':", rightAnswer: "Hiyao Miyazaki", wrongAnswer1: "John Lassiter", wrongAnswer2: "Walt Disney", wrongAnswer3: "Tex Avery"},
    {question4: "This famous Russian-born composer was the only one to both leave and then voluntarily return to the Soviet Union before his death:", rightAnswer: "Sergei Prokofiev", wrongAnswer1: "Igor Stravinsky", wrongAnswer2: "Dimitri Shostakovitch", wrongAnswer3: "Pytor Illyich Tchaikovsky"},
    {question5: "This famous psychologist did controversial experiments testing whether subjects would give lethal electric shocks once ordered to by an authority figure:" rightAnswer: "Stanley Milgram", wrongAnswer1: "Philip Zimbardo", wrongAnswer2: "Sigmund Freud", wrongAnswer3 "Joseph Mengele"},
    {question6: "The first femal Vice-Presidential candidate in U.S. history was:", rightAnswer: "Geraldine Ferraro", wrongAnswer1:"Hillary Clinton" , wrongAnswer2: "Sarah Palin", wrongAnswer3: "Carly Fiorina"},
    {question7: "The P.T. Anderson film 'There Will Be Blood' was based on which work by Upton Sinclair:?" rightAnswer "Oil!", wrongAnswer1: "The Jungle", wrongAnswer2: "The Brass Check", wrongAnswer3: "The Fountainhead"},
    {question8: "Which of these Shakespeare plays was the basis for Akira Kurosawa's 1985 film 'Ran'?", rightAnswer: "King Lear", wrongAnswer1: "Hamlet", "The Tempest", ""}
    {question9: "The individual most often considered the inventor of the computer was also a gay and autistic man named:", rightAnswer: "Alan Turing", wrongAnswer1: "Charles Babbage", wrongAnswer2:"Bill Gates", wrongAnswer3: "Steve Jobs"},
    {question10: "This founding figure of sociology also served as a contributing author to the constitution of Germany's short-lived Weimar Republic", rightAnswer: "Max Weber", wrongAnswer1: "Emile Durkheim", wrongAnswer2: "Raymond Aaron", wrongAnswer3: "Jurgen Habermas"},
]

$("#questionBox").append("<ul>" + "<li>" + triviaQuestions[0].question1);
    console.log(triviaQuestions[0].question1)

    





