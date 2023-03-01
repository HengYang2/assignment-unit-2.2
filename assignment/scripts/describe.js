// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and assign it the string value 'Dane'.
// We use a conditional 'if statement' to see if the value of name is equal to the string 'Mary'.
// Since the value of the variable, name, is not equal to the string 'Mary', we go down to the 'else' portion
// of the if statement. 
// The 'else' portion of the if statement gets executed and we console log "How do you do?".

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret but don't assign it any value.
// We then make a variable called code and assign it a number value of 123.
// We use a conditional 'if statement' to check to see if the value of code is equal to 123.
// code has a value of 123 and is equal to 123 and so secret is now assigned a string value of "super" and
// the value of code is now equal to (123 * 2) which is 246.
// We then use another conditional 'if statement' to see if the value of code is greater than 250.
// The current value of code is 246 and 246 is not greater than 250. So the value of secret does not change.
// We console log secret which will then give us "super" in the output console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent and assign it a boolean value of true.
// We make a variable called age and assign it a number value of 34.
// We make a variable called zip and assign it a number value of 55407.
// We use a compound condtional 'if statement' to check if the value of isStudent is equal to true and if
// the value of zip is greater than 8000.
// The value of isStudent is equal to true and the value of zip, which is 55407, is less than 8000.
// Because both conditions are not met, we move down into the 'if-else statement' below to check conditions.
// In the first 'if-else statement', if we plug in values for the condition we get: true === false or
// 34 < 30. Because neither of these conditons are met, we move down to the next 'if-else statement'.
// Plugging in values for the second 'if-else statement' we get: true === true.
// Since that condition is met we console log "Welcome to Prime!". 
// Note that the 'else statement' below is not executed.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - Here colorOne and colorTwo are not intialized correctly. colorOne should be given a value of 'blue'
// -- and colorTwo should be given the value of 'red'.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - Here colorOne is correctly set to have a string value of 'purple', but colorTwo was neglected
// -- and wasn't assigned the value of 'purple' as instructed. You can fix this by changing the value of
// -- colorTwo to equal 'purple' within the 'if statement'.
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - In the 'if statement' below, the 'or' operator (||) should be changed to an 'and' operator (&&).
// This is because the description asked for both conditions to be true, not one or the other.
// In this case, the desired output in the console will still be the same, whether you use the 'or' operator,
// -- or the 'and' opperator; However, that may not be the case, if for example (temp > 39) or 
// -- (time >= 4) is false. So basically, use the "and" operator instead of the "or" operator because they
// -- can give two very different outcomes and you specifically want both conditions to be true in this
// -- description - for the 'if statement' to be executed.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX -- If you were to follow the logic of this 'if statement' the console log would be "no entry", not
// -- "enter". Which the description says that it does.
// To fix this problem you can switch around the console log outputs. For example, change the
// -- "console.log('no entry')" to "console.log('enter')"" and vice versa. 
// This way if you follow the logic, you would then be given the console log 'enter' if age is >= minAge.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

