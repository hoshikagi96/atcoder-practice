'use strict'

function main(input) {
    let N = Number(input);

    if (-(2 ** 31) <= N && N < 2 ** 31) {
        console.log(2 ** 31)
        console.log('Yes')
    }

    // while (Math.abs(N) >= 2) {
    //     N = Math.abs(N) / 2
    //     console.log(N)
    // }
    console.log(N)
}
// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`4835978484`)

2147483648
4294967296