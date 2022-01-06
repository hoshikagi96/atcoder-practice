'use strict'

function main(input) {
    const tmp = input.trim().split('\n');
    const [N, A, B] = tmp[0].split(' ').map(Number);
    const persons  = [...tmp[1]];

    let totalCount = 0;
    let bCount = 0;
    const results = [];
    for (let i = 0; i < N; i++) {
        const p = persons[i];
        if (p == 'c') {
            results.push('No');
        } else if (p == 'a') {
            if (totalCount < A + B) {
                results.push('Yes');
                totalCount++
            } else {
                results.push('No');
            }
        } else if (p == 'b') {
            if (bCount < B) {
                results.push('Yes');
                totalCount++
                bCount++
            } else {
                results.push('No');
            }
        }
    }
    console.log(results.join('\n'));
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`12 5 2
cabbabaacaba`);