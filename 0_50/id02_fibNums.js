"use strict";

// Generate fib numbers
function generateFib(limit) {
  let fibSum = 0;
  let currentNum = 0;
  let nextNum = 0;
  let fibSeq = [0, 1];
  for (let i = 0; currentNum + nextNum < limit; i++) {
    currentNum = fibSeq[i];
    nextNum = fibSeq[i + 1];
    fibSeq.push(currentNum + nextNum);
  }
  for (let i = 0; i < fibSeq.length; i++) {
    if (isEven(fibSeq[i])) {
      fibSum += fibSeq[i];
    }
  }
  console.log(fibSeq);
  return fibSum;
}

// Check if number even
function isEven(fibSeqNum) {
  return fibSeqNum % 2 == 0 ? true : false;
}

// Start function
function sumEvenFib(limit) {
  console.log(generateFib(limit));
}

sumEvenFib(4000000);
