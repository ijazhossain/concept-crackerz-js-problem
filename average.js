/* 
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. 
Input:
The input parameter will be an array of integers, where each integer represents the mark of a subject given above.
Output:
Print the result in 2 decimal places. If you get a fraction rounded up to 2 decimal places. The output must have to be in number format.
Hints: First check if your output is in number format or string format by  typeof  operator.
Sample Input:
[75.25, 65, 80, 35.45, 99.50]
Output:
71.04
Sample Input:
[100, 100, 100, 100, 100]
Output:
100
*/
function average(arrOfMarks) {
    let totalMarks = 0;
    for (let i = 0; i < arrOfMarks.length; i++) {
        let element = arrOfMarks[i];
        totalMarks += element;
    }
    const averageMark = totalMarks / arrOfMarks.length;
    const average = parseFloat(averageMark.toFixed(2));
    return average;
}
const result = average([75.25, 65, 80, 35.45, 99.50]);
console.log(result);