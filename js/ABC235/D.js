'use strict'

function main(input) {
    const [a, N] = input.split(' ').map(Number);

    let count = 0;

    // const resList = [];
    let X = N;
    while (X !== 1 && count < N) {
        console.log(X)
        console.log(X / a);
        if (X % a === 0) {
            X = X / a;
            count++;
        } else if (X >= 10 && X % 10 !== 0) {
            const tmp1 = X.toString().slice(0, 1);
            const tmp2 = X.toString().slice(1);
            X = Number(`${tmp2}${tmp1}`);
            count++;
        } else {
            break;
        }
        // resList.push(N);
        // if (resList.indexOf(N) !== -1) {
        //     break;
        // }
    }
    console.log(X === 1 ? count: '-1');
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`2 767090`)