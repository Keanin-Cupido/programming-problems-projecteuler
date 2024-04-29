"use strict";

// Check if a number is a prime
function getPrime(checkNum) {
  let factors = [];
  for (let y = 1; y <= checkNum; y++) {
    if (checkNum % y === 0) {
      factors.push(y);
    }
  }

  if (factors.length === 2) {
    return true;
  } else {
    return false;
  }
}

// Check if a prime is a factor
function getPrimeFactors(getPrimeArr, num) {
  let primeFactors = [];
  for (let x = 0; x < getPrimeArr.length; x++) {
    if (num % getPrimeArr[x] === 0) {
      primeFactors.push(getPrimeArr[x]);
    }
  }
  return primeFactors;
}

// Returns the largest prime factor
function getLgstPrimeFac(primeNumsArr) {
  return Math.max.apply(null, primeNumsArr);
}

// Output the prime factors
function output(primeNumsArr, num) {
  console.log(primeNumsArr);
  console.log(
    `The largest prime factor of ${num} is ${getLgstPrimeFac(primeNumsArr)}`,
  );
}

// Main call function
function main(num) {
  let primeNums = [];
  for (let i = 1; i < num; i++) {
    if (getPrime(i)) {
      primeNums.push(i);
    }
  }
  const primeFactors = getPrimeFactors(primeNums, num);
  output(primeFactors, num);
}

main(13195);
