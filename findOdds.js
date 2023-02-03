/* 
Write a function findOddSum() that will take the array as the input parameter and will return the sum of the odd numbers. No need to return anything if the odd numbers do not exist in the array
Sample Input:
[5, 7, 8, 10, 45, 30]
Sample Output:
57
*/
function findOddSum(arrOfNumbers) {
    let total = 0;
    for (var i = 0; i < arrOfNumbers.length; i++) {
        if (arrOfNumbers[i] % 2 != 0) {
            total += arrOfNumbers[i];
        }
    }
    return total;
}
var result = findOddSum([5, 7, 8, 10, 45, 30]);
console.log(result);