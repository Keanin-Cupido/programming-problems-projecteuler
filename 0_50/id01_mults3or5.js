'use stict'

let multiples = [];
let sumMultiples = 0;

for (let i = 0; i < 10; i++) {
    multiples.push((i % 3 == 0) || (i % 5 == 0) ? i : null);
}

sumMultiples = multiples.reduce((sum, multiple) => sum + multiple, 0);
console.log(sumMultiples);