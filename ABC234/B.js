'use strict'

function main(input) {
    const tmp = input.trim().split('\n');
    const N = Number(tmp.shift());

    const results = [];
    for (let i = 0; i < N; i++) {
        const [x, y] = tmp[i].split(' ').map(Number);
        for (let j = 0; j < N; j++) {
            const [a, b] = tmp[j].split(' ').map(Number);
            results.push(Math.abs(x - a) ** 2 + Math.abs(y - b) ** 2);
        }
    }
    const max = Math.max(...results);

    console.log(Math.sqrt(max));
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`5
315 271
-2 -621
-205 -511
-952 482
165 463`)