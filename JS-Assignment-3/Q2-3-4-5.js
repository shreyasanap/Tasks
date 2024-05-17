/* Q2.
let str = 'I love my India'
output expected = 'India my love I'
Write code for this.
*/
function reverseWords(input) {
    const characters = input.split(' ');
    const reversedCharacters = characters.reverse();
    const reversedString = reversedCharacters.join(' ');
    return reversedString;
  }
  const input = "I love my India";
  const output = reverseWords(input);
  console.log("Output:", output);


  /* Q3.
let string = 'INDIA'
output = 'INDONESIA'
Use array.splice
*/

let string = 'INDIA';

let stringArray = string.split('');
// console.log(stringArray)
let substring = 'ONES';
let insertIndex = 3;
stringArray.splice(insertIndex,0, ...substring);
let result = stringArray.join('');
console.log(result);

// Q 4.
// Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
function countConsonantsAndVowels(str) {
    str = str.toLowerCase();
    let vowelCount = 0;
    let consonantCount = 0;
    let otherCount=0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      } 
      else if (char >= 'a' && char <= 'z') {
        consonantCount++;
      }
      else{
        otherCount++;
      }
    }
  
    return { vowelCount, consonantCount ,otherCount};
  }
  
  const inputString = 'hey ,i am shreya  ';
  const counts = countConsonantsAndVowels(inputString);
  
  console.log('Vowel Count:', counts.vowelCount);
  console.log('Consonant Count:', counts.consonantCount);
  console.log('Other Count:', counts.otherCount);

//   Q 5.

function replaceWrongWithCorrect(sentence, wrong, correct) {
    const correctedSentence = sentence.replace(wrong,correct);
    return correctedSentence;
  }  
  const inputSentence = "This is a test sentence with wrong word.";
  const wrongWord = "wrong";
  const correctWord = "correct";
  const correctedSentence = replaceWrongWithCorrect(inputSentence, wrongWord, correctWord);
  console.log(correctedSentence);
  
  