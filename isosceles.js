/* 
You are given a triangle with three sides as input. Write a function checkTriangle to check whether a triangle is Isosceles or not.
Isosceles means two sides are equal.
*/
function checkTriangle(side1, side2, side3) {
    if (side1 == side2 && side2 == side3 && side1 == side3) {
        return 'No';
    } else {
        if (side1 == side2 || side1 == side3 || side3 == side2) {
            return 'Yes';
        } else {
            return 'No';
        }
    }
}
checkTriangle(7, 8, 9);