/* 
Objective
In this challenge, we learn about switch statements.
Task
Complete the getLetter(s) function in the editor. It has one parameter: a string, 
, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
If the first character in string s is in the set {a , e, i, o, u} then return A.
If the first character in string s is in the set {b , c, d, f, g} then return B.
If the first character in string s is in the set {h , j , k, l, m} then return C.
If the first character in string s is in the set {n , p , q , r , s , t , v , w , x , y , z} then return D.
Hint: You can get the letter at some index i in s using the syntax s[i] or s.charAt(i).
Function Description
Complete the getLetter function in the editor .
getLetter has the following parameters:
string s: a string
Returns
string: a single letter determined as described above
Input Format
A single string denoting s .
Constraints
1<=|s|<=100, where |s| is the length of s.
String s contains lowercase English alphabetic letters (i.e., a through z) only.
Sample Input 0
adfgt
Sample Output 0
A
Explanation 0
The first character of string s = adfgt is a. Because the given criteria stipulate that we print A any time the first character is in {a,e,i,o,u} , we return A as our answer.
*/
function getLetter(s) {
    let letter = '';
    if (s.length >= 1 && s.length <= 100) {

        if (s[0].toLowerCase() == 'a' || s[0].toLowerCase() == 'e' || s[0].toLowerCase() == 'i' || s[0].toLowerCase() == 'o' || s[0].toLowerCase() == 'u') {
            letter = 'A';
        } else if (s[0].toLowerCase() == 'b' || s[0].toLowerCase() == 'c' || s[0].toLowerCase() == 'd' || s[0].toLowerCase() == 'f' || s[0].toLowerCase() == 'g') {
            letter = 'B'
        } else if (s[0].toLowerCase() == 'h' || s[0].toLowerCase() == 'j' || s[0].toLowerCase() == 'k' || s[0].toLowerCase() == 'l' || s[0].toLowerCase() == 'm') {
            letter = 'C'
        } else if (s[0].toLowerCase() == 'n' || s[0].toLowerCase() == 'p' || s[0].toLowerCase() == 'q' || s[0].toLowerCase() == 'r' || s[0].toLowerCase() == 's' || s[0].toLowerCase() == 't' || s[0].toLowerCase() == 'v' || s[0].toLowerCase() == 'w' || s[0].toLowerCase() == 'x' || s[0].toLowerCase() == 'y' || s[0].toLowerCase() == 'z') {
            letter = 'D';
        }
    }
    return letter;
}
var result = getLetter('adfgt');
console.log(result);