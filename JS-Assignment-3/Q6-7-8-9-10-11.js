/* Q 6.
inputArr = [1,2,3,9,10,7,5,4,3]
answer = [9, 10, 7]
User array.filter and return numbers greater than 5.
*/

const inputArr = [1,2,3,9,10,7,5,4,3];
const answer = inputArr.filter(number => number > 5);
console.log(answer);

// Question 7
const students1 = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students1.map(student => {
    const sum = student.scores.reduce((acc, score) => acc + score, 0);
    const average = sum / student.scores.length;
    return { name: student.name, average: average };
});

console.log(output);
//Output:
// [
//     { name: 'Ram', average: 70 },
//     { name: 'Mohan', average: 80 },
//     { name: 'Sai', average: 70 },
//     { name: 'Hemang', average: 85 }
//   ]

// Question 8 

function findSingleDigitSum(num) {
    while (num >= 10) {
      let sum = 0;
      while (num > 0) {
        sum += num % 10;
        console.log('sum:',sum)
        num = Math.floor(num / 10);
        console.log("num",num)
      }
      num = sum;
    }
    return num;
  }
  
  const number = 456;
  const result = findSingleDigitSum(number);
  console.log("Result:", result);


//   Question 9

let paragraph=" Write a function to  count  the number of words in a paragraph."
const words = paragraph.split(' ');
const filteredWords = words.filter(word => word.length > 0);
console.log(filteredWords)
console.log("Number of words is :",filteredWords.length)

// Question 10
function reverseString(input) {
    const characters = input.split('');
    const reversedCharacters = characters.reverse();
    const reversedString = reversedCharacters.join('');
    return reversedString;
  }
  const input = "Hello";
  const output1 = reverseString(input);
  console.log("Output:", output1);

// Question 11
const students=[
    {student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
        }
    },
    {student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
        }
    },
    {student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
        }
    }
]
    

let output2=students.map((studentD)=>{
    let studentName=Object.keys(studentD)
    // console.log(studentName)
    let scores=Object.values(studentD[studentName])
    // console.log(scores)
    const average=scores.reduce((sum,score)=>sum+score,0)/scores.length
    // console.log(average)
    return {[studentName]:{average}}
})

console.log(output2)
  
  