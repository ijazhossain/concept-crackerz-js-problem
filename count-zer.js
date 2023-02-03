/* 
Complete the function called count_zero() which will take a binary string (Binary string is a string which consists of only 0 and 1) as a parameter and count how many 0’s are there in that string.
Sample Input:
10101
Sample output:
2
*/
function countZeros(binary_num) {
    let count = 0;
    for (var i = 0; i < binary_num.length; i++) {
        if (binary_num[i] == 0) {
            count++;
        }
    }
    return count;
}
const result = countZeros('10101');
console.log(result);