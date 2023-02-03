/* 
Suppose, you have an array with 5 elements. Find the smallest element of that array.
[Note: Input format: an array will be accepted as input
Output format: A single number]
Sample Input:
[10,33,5,99,6]
Sample output:
5
*/
function findingSmallest(numbers) {
    var smallest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}
var result = findingSmallest([10, 33, 5, 99, 6]);
console.log(result);