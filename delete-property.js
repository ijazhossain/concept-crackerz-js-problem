/* 
Write a function deleteProp which takes an array. The first element will be an object, and the second element will be a string prop.

 If the object(first element) has a property prop, the function removes the property from the object and returns ’YES’; in all other cases it returns’NO’.
for example the input array will be like 
Case 1: 
Input:
[
  {
   fname:'John',
  },'fname'
]
Output:
"YES"

Case 2: 
Input:
[
  {
   lastName:'Mithila',
  },'fname'
]
Output:
"NO"
*/
const deleteProperty = (arr) => {
    const objectKey = Object.keys(arr[0]);
    console.log(objectKey[0]);
    const stringProp = arr[1];
    if (objectKey[0] == stringProp) {
        delete arr[0][objectKey[0]];
        console.log(arr);
        return 'YES';

    } else {
        console.log(arr);
        return 'NO';
    }
}
var result = deleteProperty([
    {
        lastName: 'Mithila',
    }, 'lastName'
]
)
console.log(result);