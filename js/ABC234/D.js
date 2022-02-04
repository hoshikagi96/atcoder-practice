'use strict'

function main(input) {
    const tmp = input.trim().split('\n');
    const [N, K] = tmp.shift().split(' ').map(Number);
    const list = tmp[0].split(' ').map(Number);

    const results = [];
    const sList = list.splice(0, K);
    for (let i = K; i <= N; i++) {
        if (i === K) {
            results.push(Math.min(...sList));
        } else {
            sList.push(...list.splice(0, 1));
            const min = Math.min(...sList);
            const mIndex = sList.findIndex(n => n === min);
            const x = sList.splice(mIndex, 1);
            results.push(Math.min(...sList));
        }
    }

    console.log(results.join('\n'));
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`11 5
3 7 2 5 11 6 1 9 8 10 4`)