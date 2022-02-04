'use strict'

function main(input) {
    const tmp = input.split('\n');
    const N = Number(tmp[0]);
    const listH = tmp[1].split(' ').map(Number);

    let curr = listH[0];
    for (let i = 1; i < N; i++) {
        if (curr < listH[i]) {
            curr = listH[i];
        } else {
            break;
        }
    }
    console.log(curr);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`4
27 1828 1828 9242`)