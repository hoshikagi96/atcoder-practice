'use strict'

function main(input) {
    const K = BigInt(input);
    const res = K.toString(2);
    console.log(res.replace(/1/g, '2'));
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`923423423420220108`)