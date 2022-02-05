"use strict";
var ABC238_C;
(function (ABC238_C) {
    const input = `999999999999999999`;
    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");
    const N = Number(input);
    function getSum(N) {
        console.log(N);
        if (N % 2 === 0) {
            return (1 + N) * (N / 2);
        }
        else {
            return 1 + ((2 + N) * ((N - 1) / 2));
        }
    }
    function main(N) {
        let total = 0;
        const strN = N.toString();
        for (let i = 1; i < strN.length; i++) {
            const count = Number('9' + '0'.repeat(i - 1));
            const sum = getSum(count);
            console.log(sum);
            total += sum % 998244353;
        }
        const tmp = N - Number('9'.repeat(strN.length - 1));
        const tmpSum = tmp ? getSum(tmp) : 0;
        total += tmpSum ? tmpSum % 998244353 : 0;
        console.log(tmpSum);
        console.log(total);
    }
    main(N);
})(ABC238_C || (ABC238_C = {}));
