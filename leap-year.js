/* 
Write a function findLeapYear() that will take an array as the input parameter and will check if each year is a leap year. If a year is a leap year, insert that year in a new array. Return the new array and print the result. There is no need to return anything if there is no leap year found.
Sample Input-1:
[2023,2024,2025,2028,2030]
Sample Output:
[2024, 2028]
*/
function findLeapYear(arrOfYears) {
    let leapYear = [];
    for (var i = 0; i < arrOfYears.length; i++) {
        let element = arrOfYears[i];
        if ((0 == element % 4) && (0 != element % 100) || (0 == element % 400)) {
            leapYear.push(element);
        }
    }
    return leapYear;
}
const result = findLeapYear([2023, 2024, 2025, 2028, 2030]);
console.log(result);