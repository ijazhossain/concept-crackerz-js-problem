/* 
You will be given an array as input containing 5 integer numbers. Your task is very simple. You have to find out the second largest element from the numbers.
Sample Input:
[10,33,5,99,6]
Sample output:
33
*/
function secondLargest(numbers) {
    let largest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    numbers.splice(numbers.indexOf(largest), 1);
    let secondLargest = numbers[0]
    for (var i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > secondLargest) {
            secondLargest = element;
        }
    }
    return secondLargest;
}
const result = secondLargest([10, 33, 5, 99, 6]);
console.log(result);