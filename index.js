
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return fromN;
  } else {
    return sum(fromN, toN - 1) + toN;
  }
}

// console.log(sum(3, 7));
module.exports = sum;

