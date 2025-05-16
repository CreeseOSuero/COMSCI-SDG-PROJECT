HELLO! 

Project Title: Interactive Quiz Add-On for SDG Website Subject: Computer Science 3
Grade Level: 9
Duration: 2 Weeks

In order to access the quiz, users must press the "SDG 16 QUIZ" on the top- they can access it almost anywhere! Whether it is from the main.html, goal16.html, or about.html
After, they must scroll down and see the quiz (which is integrated in the quiz.html) 
- The quiz is shown to automatically have the questions
- The user will then press what they think the correct answer is (the answers can be found on the website so look carefully!)
- The program will show the user "green" for correct answer and "red" for the wrong answer
- After pressing the choices, user can now press the formerly disabled "next" button.
- After user repeats these instructions, the feedback message and score will be shown with a try again button
- User should opt to try again if their score is low.
- If not, congrats!

These are the instructions in order to use the quiz! 

_____________________________________________________________________________________________________________________________________________________________________________________
HOW DOES THE QUIZ WORK ? 
- The quiz.html has the original format of the past websites and also includes the "quiz" portion which is powered up by javascript (quiz.js)
- The quiz.css includes the sizes of fonts, colors, margins, etc.
- For this AA, the quiz.js is the star of the show. With the questions being in this part.
  - Here, variables are first declared and also document.getElementById
  - The questions then appear
  - After there is a function which shows the question and choices (showQuestion()), it also contains control statements (if-else, for)
  - If there is a function for the question and choices, there is a separate function for checking the answer (checkAnswer()) which also includes the color indicators if wrong or correct
  - There is then another function that adds the "index", this portion is what makes the question go "next question"
  - The next function is the showScore() which shows the score and also shows the feedback messages, score and the default message
  - The feedback message depends on the score you got, the control statement if-else was used for this part
  - The final function is the trygain() which will restart the entrie program

This is how the quiz works!
