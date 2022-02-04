'use strict'

function main(input) {
    const tmp = input.split("\n");
    const N = Number(tmp.shift());
    const nums = tmp.shift().split(' ').map(Number);

    let total = 0;
    for (let i = 0; i < N; i++) {
        total += nums[i];
    }
    console.log(total % 100);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`
`)