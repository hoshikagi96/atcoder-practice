'use strict'

function main(input) {
    const tmp = input.split('\n');
    const [N, Q] = tmp.shift().split(' ').map(Number);
    const listA = tmp.shift().split(' ').map(Number);
    const resObj = {};
    
    for (let i = 0; i < N; i++) {
        if (resObj[listA[i]]) {
            resObj[listA[i]].push(i + 1);
        } else {
            resObj[listA[i]] = [i + 1];
        }
    }

    for (let i = 0; i < Q; i++) {
        const [X, K] = tmp[i].split(' ').map(Number);
        console.log(resObj[X] && resObj[X][K - 1] ? resObj[X][K - 1] : '-1');
    }
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`6 8
1 1 2 3 1 2
1 1
1 2
1 3
1 4
2 1
2 2
2 3
4 1`)
