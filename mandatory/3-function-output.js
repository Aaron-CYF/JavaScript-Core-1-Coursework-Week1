// Add comments to explain what this function does. You're meant to use Google!
function getRandomNumber() {
  // Math.random() returns a number between 0 and 1 then using * 10 makes it return between 0 and 10 
  return Math.random() * 10;
}

// Add comments to explain what this function does. You're meant to use Google!
function combine2Words(word1, word2) {
  // concat is returning the contents of word2 added onto the end of the contents of word1 and the result is them being combined.
  // it does not change the original contents of word1 only returning the result
  return word1.concat(word2);
}

function concatenate(firstWord, secondWord, thirdWord) {
  // Write the body of this function to concatenate three words together.
  // Look at the test case below to understand what this function is expected to return.
  return firstWord.concat(" ", secondWord, " ", thirdWord);
}

/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 3-function-output` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
==================================
*/

test("concatenate example #1", () => {
  expect(concatenate("code", "your", "future")).toEqual("code your future");
});

test("concatenate example #2", () => {
  expect(concatenate("I", "like", "pizza")).toEqual("I like pizza");
});

test("concatenate doesn't only accept strings", () => {
  expect(concatenate("I", "am", 13)).toEqual("I am 13");
});
