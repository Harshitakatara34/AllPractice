function calculate(dist1, dist2) {
    const dist = Array(Math.max(...dist1) + Math.max(...dist2)).fill(0);
    for (const p1 of dist1) {
      for (const p2 of dist2) {
        const sum = p1 + p2;
        dist[sum - 1]++;
      }}
    return dist.map(el => el / (dist1.length * dist2.length));
  }
  function generatePairs(die) {
    const pairs = [];
    for (const pair1 of die) {
      for (const pair2 of die) {
        if (pair1.every(value => value <= 4)) {
          pairs.push([...pair1, ...pair2]);
        }}}
    return pairs.filter(pair => pair.slice(0, 6).join("") <= pair.slice(6).join(""));
  }
  function undoom_dice(normalDist, allPairs) {
    for (const dicePair of allPairs) {
      const pairs = calculate(dicePair.slice(0, 6), dicePair.slice(6));
  // console.log(pairs)
      let match = true;
      for (let index = 0; index < pairs.length; index++) {
        if (pairs[index] !== normalDist[index]) {
          match = false;
          break;
        }}
      if (match) {
        console.log("Dice 1:", dicePair.slice(0, 6));
        console.log("Dice 2:", dicePair.slice(6));
        return;
      }}}
  function main() {
    const originalDie_A = [1, 2, 3, 4, 5, 6];
    const originalDie_B = [1, 2, 3, 4, 5, 6];
    const normalDist = calculate(originalDie_A, originalDie_B);
    const configs = [];
    for (let side1 = 2; side1 <= 8; side1++) {
      for (let side2 = 2; side2 <= 8; side2++) {
        for (let side3 = 2; side3 <= 8; side3++) {
          for (let side4 = 2; side4 <= 8; side4++) {
            for (let side5 = 2; side5 <= 8; side5++) {
              const config = [1, side1, side2, side3, side4, side5];
              let isValid = true;
  
              for (let index = 1; index < config.length; index++) {
                if (config[index] < config[index - 1]) {
                  isValid = false;
                  break;
                }}
              if (isValid) {
                configs.push(config);
              }}}}}}
    const allPairs = generatePairs(configs);
    undoom_dice(normalDist, allPairs);
  }
  main();