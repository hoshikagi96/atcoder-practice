"use strict";
var Q14;
(function (Q14) {
    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");
    const input = '10';
    const N = Number(input.trim());
    function getPrimeFactors(num) {
        const ans = [];
        if (num === 1) {
            ans.push(1);
            return ans;
        }
        for (let i = 2; i * i <= num; i++) {
            while (num % i === 0) {
                ans.push(i);
                num = num / i;
            }
        }
        if (num !== 1) {
            ans.push(num);
        }
        return ans;
    }
    console.log(getPrimeFactors(N).join(' '));
})(Q14 || (Q14 = {}));
