/* 
Write a function solution that takes a string parameter and returns the word in reverse order.

In this task, you are given an input string and the task is to reverse the input string.

For Example, 
Input: str = "GeeksforGeeks"
Output: "skeeGrofskeeG"
Input: str = "Hello"
Output: "olleH"

*/
const reverseMaker = (word) => {
    const splitWord = word.split('');
    const reverseSplitWord = splitWord.reverse();
    const reverseWord = reverseSplitWord.join('');
    return reverseWord;
};
const result = reverseMaker("Hello");
console.log(result);