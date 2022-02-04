'use strict'

function main(input) {
    const [N, S] = input.split(' ').map(Number);

    let count = 0;

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            if (i + j <= S) {
                count++;
            }
        }
    }

    console.log(count);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`3 4`)