'use strict'

function main(input) {
    const [N, X, Y] = input.split(' ').map(Number);

    let count = 0;
    for (let i = 1; i <= N; i++) {
        if (i % X == 0 || i % Y == 0) {
            count++
        }
    }

    console.log(count);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`15 3 5`)