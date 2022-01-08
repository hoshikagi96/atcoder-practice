'use strict'

function main(input) {
    const tmp = input.trim().split('\n');
    const N = Number(tmp.shift());
    const nums = tmp[0].split(' ').map(Number);

    const sorted = nums.sort((a, b) => b - a);

    let alice = 0;
    let bob = 0;
    for (let i = 0; i < N; i++) {
        if (i % 2 == 0) {
            alice += sorted[i];
        } else {
            bob += sorted[i];
        }
    }

    console.log(alice - bob);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`4
20 18 2 18`)