// Part-A

// 1. Total Combinations
let totalCombinations = 6 * 6;
console.log(`1. Total Combinations: ${totalCombinations}`);

// 2. Calculate and display the distribution matrix
let dieA = [1, 2, 3, 4, 5, 6];
let dieB = [1, 2, 3, 4, 5, 6];

let distributionMatrix = [];

for (let i = 0; i < 6; i++) {
    distributionMatrix[i] = [];
    for (let j = 0; j < 6; j++) {
        distributionMatrix[i][j] = dieA[i] + dieB[j];
    }
}

// Display the distribution matrix
console.log("2. Distribution Matrix:");
for (let i = 0; i < 6; i++) {
    console.log(distributionMatrix[i].join('\t'));
}

// 3. Calculate the Probability of all Possible Sums
console.log("3. Probability of Sums:");
for (let sum = 2; sum <= 12; sum++) {
    let count = 0;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if (distributionMatrix[i][j] === sum) {
                count++;
            }
        }
    }
    let probability = count / totalCombinations;
    console.log(`P(Sum = ${sum}) = ${count}/${totalCombinations} = ${probability.toFixed(4)}`);
}
