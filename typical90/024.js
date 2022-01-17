'use strict'

function main(input) {
    const tmp = input.split('\n');
    const [N, K] = tmp.shift().split(' ').map(Number);
    const listA = tmp.shift().split(' ').map(Number);
    const listB = tmp.shift().split(' ').map(Number);

    let totalDiff = 0;
    for (let i = 0; i < N; i++) {
        totalDiff += Math.abs(listA[i] - listB[i]);
    }

    if (K - totalDiff < 0) {
        console.log('No');
    } else {
        if ((K - totalDiff) % 2 === 0) {
            console.log('Yes');
        } else {
            console.log('No');
        }
    }
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`7 999999999
3 1 4 1 5 9 2
1 2 3 4 5 6 7
`)