'use strict'

function main(input) {
    const tmp = input.split("\n");
    const N = Number(tmp.shift());
    const nums = tmp.shift().split(' ').map(Number);

    let result = 0;
    for (let i = 0; i < N; i++) {
        result += nums[i];
    }

    console.log(result);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`
`)