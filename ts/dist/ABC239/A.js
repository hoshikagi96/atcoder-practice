"use strict";
var ABC238_A;
(function (ABC238_A) {
    const input = `333`;
    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");
    const N = Number(input);
    const res = Math.sqrt(N * (12800000 + N));
    console.log(res);
})(ABC238_A || (ABC238_A = {}));
