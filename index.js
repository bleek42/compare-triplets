function compareTriplets(a, b) {
  const scoreArray = [];
  let aScore = 0;
  let bScore = 0;
  let i = 0;
  while (a && b) {
    if (isNaN(a[i] || b[i])) throw new TypeError('elements must be numbers');
    // if (a[i] > b[i]) {
    //   aScore++;
    // }
    // if (a[i] < b[i]) {
    //   bScore++;
    // }
    (a[i] > b[i] ? aScore++ : bScore++);
    scoreArray.push(aScore, bScore);
  }
  return scoreArray;
}

const alice = [1, 2, 3];
const bob = [3, 2, 1];

console.log(compareTriplets(alice, bob));