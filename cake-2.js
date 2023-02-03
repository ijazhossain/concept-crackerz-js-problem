/* 
This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?
Input:
The input line has three values, x (The marks Jim has got), y (The marks Dela has got) and z (The marks Chinku has got) .
Output:
Print the name of the topper. 
Sample Input-1:
84  99  77 
Sample Output-1:
Dela
*/
function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku) {
    if (marksOfJim > marksOfDela) {
        if (marksOfJim > marksOfChinku) {
            return "Jim";
        }
    } else if (marksOfDela > marksOfChinku) {
        if (marksOfDela > marksOfJim) {
            return "Dela";
        }
    } else {
        return "Chinku";
    }
}
var result = JimOrDelaOrChinku(84, 99, 77);
console.log(result); 
