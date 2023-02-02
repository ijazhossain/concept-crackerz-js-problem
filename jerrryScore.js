/* 
Jerry loves playing TomatoBall online. He always starts with TomatoBall from the first round. Sometimes he reaches the 3rd round, sometimes the 4th round, and so on. Eventually, he becomes bored and stops playing. So, what is Jerry’s final score when he stops a game?
[ 
Note:
Input format: an array will be accepted as input
Output format: A single number
]
Input:

The input line can have multiple integer numbers, xi (The score in ith round).
Output:
Print the final (total) score . 
Sample Input-1:
20  13  37 
Sample Output-1:
70
 */
function finalScore(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        const item = scores[i];
        sum = sum + item;
    }
    return sum;
}

const jerryFinalScore = finalScore([20, 13, 37]);
console.log(jerryFinalScore);