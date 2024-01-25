function calculate(dist1, dist2) {
  const dist = Array(Math.max(...dist1) + Math.max(...dist2)).fill(0);
  for (const p1 of dist1) {
    for (const p2 of dist2) {
      const sum = p1 + p2;
      dist[sum - 1]++;
    }
  }
  return dist.map(el => el / (dist1.length * dist2.length));
}

function generatePairsHelper(config, die, startIndex, allPairs) {
  if (startIndex === die.length) {
    if (config.slice(0, 6).join("") <= config.slice(6).join("")) {
      allPairs.push([...config]);
    }
    return;
  }

  for (let i = 2; i <= 8; i++) {
    config[startIndex] = i;
    generatePairsHelper(config, die, startIndex + 1, allPairs);
  }
}

function generatePairs(die) {
  const allPairs = [];
  const config = Array(die.length).fill(0);
  generatePairsHelper(config, die, 0, allPairs);
  return allPairs;
}

function undoom_dice(normalDist, allPairs, currentPairIndex) {
  if (currentPairIndex === allPairs.length) {
    return;
  }

  const pairs = calculate(allPairs[currentPairIndex].slice(0, 6), allPairs[currentPairIndex].slice(6));

  let match = true;
  for (let index = 0; index < pairs.length; index++) {
    if (pairs[index] !== normalDist[index]) {
      match = false;
      break;
    }
  }

  if (match) {
    console.log("Dice 1:", allPairs[currentPairIndex].slice(0, 6));
    console.log("Dice 2:", allPairs[currentPairIndex].slice(6));
    return;
  }

  undoom_dice(normalDist, allPairs, currentPairIndex + 1);
}

function main() {
  const originalDie_A = [1, 2, 3, 4, 5, 6];
  const originalDie_B = [1, 2, 3, 4, 5, 6];
  const normalDist = calculate(originalDie_A, originalDie_B);

  const allPairs = generatePairs(originalDie_A);
  undoom_dice(normalDist, allPairs, 0);
}

main();
