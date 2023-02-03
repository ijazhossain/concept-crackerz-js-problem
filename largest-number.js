/* 
You will be given an array of three numbers and you will have to print the largest number. Write a function findMax that will return the largest number using if-else.
Sample Input:
[55,10,95]
Sample Output:
95
*/
function findMax(arr) {
    let largest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
var result = findMax([55, 10, 95]);
console.log(result);