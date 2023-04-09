// Guess the Number, Display and also Dislpay  Score of the user using JavaScript
let number = Math.random() * 100
number = parseInt(number)
//console.log(number)	//uncomment this line to reveal the Generated Number xD!!
var score = 101,chance = 0;
let guess;
do {
  guess = prompt("Guess the Number")
  guess = parseInt(guess)
    if(guess > 100 || guess < 0)
    {
      console.log("Enter the Valid Number.")
    }
  else if(guess > number)
  {
    console.log(guess+ " is greater than the Random Number\n")
  }
  else if(guess < number)
  {
    console.log(guess+ " is less than the Random Number\n")
  }
  
  chance++;
  score--;
  if (guess != number) {
    console.log('Try again, Attempt: '+chance)
  }
  else {
    console.log("Hurray!! You Guessed the Correct Number in "+chance+ " chances \nScore: "+score)
  }
}
while (guess != number) 

