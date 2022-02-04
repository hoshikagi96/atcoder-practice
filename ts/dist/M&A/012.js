"use strict";
var Q12;
(function (Q12) {
    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");
    const input = '97'; // for test
    const tmp = Number(input.trim());
    function isPrime(num) {
        for (let i = 2; i * i <= num; i++) {
            console.log(num / i);
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    if (isPrime(tmp)) {
        console.log('Yes');
    }
    else {
        console.log('No');
    }
})(Q12 || (Q12 = {}));
