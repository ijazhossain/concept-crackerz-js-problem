/* 
Write a function solution that takes an alphabet as a function parameter and return whether it is VOWEL or CONSONANT.

Vowels and consonants

Words are built from vowels (a, e, i, o, u) and consonants (the rest of the alphabet).

The letter 'y' is a bit different because sometimes it acts as a consonant and sometimes it acts as a vowel.
Knowing how vowels and consonants work together to make words and sounds will help you with your spelling.
Test cases:
solution('a'); // VOWEL
solution('u'); // VOWEL
solution('k'); // CONSONANT
*/
const solution = (letter) => {
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
        return 'VOWEL';
    } else {
        return 'CONSONANT';
    }
};
var result = solution('h');
console.log(result);