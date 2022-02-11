'use strict'

function main(input) {
    let N = Number(input);

    if (-(2 ** 31) <= N && N < 2 ** 31) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}
// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`4835978484`)

2147483648
4294967296