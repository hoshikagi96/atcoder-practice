'use strict'

function main(input) {
    const tmp = input.trim().split('\n');
    const N = Number(tmp.shift());
    const K = Number(tmp.shift());
    const nums = tmp[0].split(' ').map(Number);

    let res = 0;
    for (let i = 0; i < N; i++) {
        const x = nums[i];
        const d = Math.min(x, Math.abs(K - x));
        res += d * 2;
    }

    console.log(res);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`5
20
11 12 9 17 12`)