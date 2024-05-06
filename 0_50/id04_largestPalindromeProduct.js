"use strict";

// Finding the largest palindrome of the product of two three-digit numbers
function findProduct(num1, num2) {
    return num1 * num2;
}

// Check if the product is a palindrome
function checkPalindrome(product) {
    let productStr = String(product);
    return (productStr === productStr.split('').reverse().join(''));
}

function findProducts(range) {
    let palindromProducts = [];
    for (let i = 1; i <= range; i++) {
        for (let j = 1; j <= range; j++) {
            let product = findProduct(i, j);
            if (checkPalindrome(product)) {
                palindromProducts.push(product);
            }
        }
    }
    return palindromProducts;
}

function findLargestPalindrome (range) {
    const palindromProducts = findProducts(range);
    let largestPalindrome = 0;
    for (let i = 0; i < palindromProducts.length; i++) {
        if (Number(palindromProducts[i]) > 0) {
            largestPalindrome = palindromProducts[i];
        }
    }

    return largestPalindrome;
}

console.log(findLargestPalindrome(1000));