"use strict";
var ABC238_A;
(function (ABC238_A) {
    const input = `623947744`;
    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");
    const N = Number(input);
    if (2 ** N > N ** 2) {
        console.log('Yes');
    }
    else {
        console.log('No');
    }
})(ABC238_A || (ABC238_A = {}));
