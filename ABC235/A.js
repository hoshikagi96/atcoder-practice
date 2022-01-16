'use strict'

function main(input) {
    const tmp = input;
    const a = tmp[0];
    const b = tmp[1];
    const c = tmp[2];

    const numA = a + b + c;
    const numB = b + c + a;
    const numC = c + a + b;
    console.log(Number(numA) + Number(numB) + Number(numC));
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`123`)