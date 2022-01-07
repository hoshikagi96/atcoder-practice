'use strict'

function main(input) {
    const tmp = input.trim().split('\n');
    const [N, M, C] = tmp.shift().split(' ').map(Number);
    const listB = tmp.shift().split(' ').map(Number);

    let count = 0;
    for (let i = 0; i < N; i++) {
        const listA = tmp[i].split(' ').map(Number);
        let result = C;
        for (let j = 0; j < M; j++) {
            result += listA[j] * listB[j];
        }
        if (result > 0) {
            count++
        }
    }
    console.log(count);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`3 3 0
100 -100 0
0 100 100
100 100 100
-100 100 100`)