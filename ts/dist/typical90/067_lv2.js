"use strict";
// TODO: WAあり
var typical67;
(function (typical67) {
    const input = `0 1`;
    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");
    const [N, K] = input.trim().split(' ').map(BigInt);
    function convToDecimal(num, n) {
        const N = BigInt(n);
        let res = 0n;
        const listNum = String(num).split('');
        for (let i = 1; i <= listNum.length; i++) {
            const d = listNum[listNum.length - i];
            res += BigInt(d) * (N ** BigInt(i - 1));
        }
        return res;
    }
    let num = N;
    if (num === 0n) {
        console.log(String(num));
    }
    else {
        for (let i = 0; i < K; i++) {
            // 8進数から10進数
            num = convToDecimal(num, 8);
            // 10進数から9進数
            let converted = num.toString(9);
            num = BigInt((converted.replace(/8/g, '5')));
        }
        console.log(String(num));
    }
})(typical67 || (typical67 = {}));
