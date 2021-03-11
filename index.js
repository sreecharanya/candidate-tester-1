// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/candidateQuiz.html

// Welcome to your first assignment.
// Login and then fork this repl.it
// Add your code here. You can do it!
const input=require('readline-sync')
let name='';
let question=['True or false: 5000 meters = 5 kilometers.','(5 + 3)/2 * 10 = ?','Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?','Who was the first American woman in space?','What is the minimum crew size for the International Space Station (ISS)?'];
let correctAnswer=['True','40','Trajectory','Sally Ride','3'];
let candidateAnswer=[];
let correct=0;
let percent=0;
let status='';

name=input.question("Enter your name:")
console.log("welcome",name)
console.log("\n")
for(let i=0;i<question.length;i++){ 
  console.log(question[i])   
  candidateAnswer[i]=String(input.question("Your Answer:"))
  console.log("Correct Answer:",correctAnswer[i])
  console.log("\n")
   if(candidateAnswer[i].toLowerCase()===correctAnswer[i].toLowerCase()){

    console.log("*****")
correct++;
// console.log(typeof candidateAnswer[i])
// console.log(typeof candidateAnswer[i])
console.log(correct)
console.log(candidateAnswer)
}
}
//console.log(candidateAnswer)
percent=(correct/question.length)*100;
console.log(`>>> Overall Grade: ${percent}% (${correct} of ${question.length}  responses correct) <<<`)
if(percent>=80){
  status='Passed'
}else{
  status='Failed'
}
console.log(`>>> Status: ${status} <<<`)