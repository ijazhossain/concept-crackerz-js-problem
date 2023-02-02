/* 
Learn how to create a temperature converter. Your task is to provide a value in Fahrenheit and then convert it into Celsius . Then round it up to two decimal places if you get fraction. And return the rounded value as output. 

Alert: The output must be in a number format. 
The formula below shows how to convert from Fahrenheit to Celsius temperature measurements:
℃=(℉-32)/1.8
Test Cases:
Case 1: 
Input: temperatureConverter(50)
Output: 10
Test Cases:
Case 2: 
Input: temperatureConverter(103)
Output: 39.44
*/
function temperatureConverter(valNum) {
    const celsiusTemperature = (valNum - 32) / 1.8;
    const temperatureNumber = parseFloat(celsiusTemperature.toFixed(2));
    return temperatureNumber;
}
var result = temperatureConverter(103);
console.log(result);
console.log(typeof result);