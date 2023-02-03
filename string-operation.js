/* 
John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to combine these two strings and print them in one line. Help John write the program.
Input:
The first and the second lines of the input contain the strings.
Output:
Print the result in one line. 
Sample Input:
I am going to be
an awesome web developer
Output:
I am going to be an awesome web developer
*/
function stringCombine(str1, str2) {
    return str1 + ' ' + str2;
}
const result = stringCombine('I am going to be', 'an awesome web developer');
console.log(result);