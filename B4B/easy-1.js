'use strict'

function main(input) {
    const [A, B] = input.trim().split(' ').map(Number);
    let opendSocket = 1;
    let count = 0;
    while (opendSocket < B) {
        count++
        opendSocket += (A - 1);
    }
    console.log(count);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`8 8`)