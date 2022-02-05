"use strict";
var Q21;
(function (Q21) {
    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");
    const input = '6 2';
    const [n, r] = input.split(' ').map(Number);
    function getCombination(n, r) {
        let a = 1;
        for (let i = 1; i <= n; i++) {
            a = a * i;
        }
        let b = 1;
        for (let i = 1; i <= n - r; i++) {
            b = b * i;
        }
        let c = 1;
        for (let i = 1; i <= r; i++) {
            b = b * i;
        }
        return a / (b * c);
    }
    console.log(getCombination(n, r));
})(Q21 || (Q21 = {}));
