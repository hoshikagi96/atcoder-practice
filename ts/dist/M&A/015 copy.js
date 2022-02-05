"use strict";
var Q15;
(function (Q15) {
    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");
    const input = ('33 88');
    const [A, B] = input.split(' ').map(Number);
    function getGCD(numA, numB) {
        const f = (m, n) => n ? f(n, m % n) : m;
        return f(numA, numB);
    }
    console.log(getGCD(A, B));
})(Q15 || (Q15 = {}));
