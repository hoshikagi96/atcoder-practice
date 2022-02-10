"use strict";
// 貪欲法（端から選択を繰り返していく） 
var Typical14;
(function (Typical14) {
    const input = `20
804289382 846930886 681692776 714636914 957747792 424238335 719885386 649760491 596516649 189641420 25202361 350490026 783368690 102520058 44897761 967513925 365180539 540383425 304089172 303455735
35005211 521595368 294702567 726956428 336465782 861021530 278722862 233665123 145174065 468703135 101513928 801979801 315634021 635723058 369133068 125898166 59961392 89018454 628175011 656478041
`;
    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");
    const tmp = input.trim().split('\n');
    const N = Number(tmp.shift());
    const listA = tmp.shift().split(' ').map(Number);
    const listB = tmp.shift().split(' ').map(Number);
    listA.sort((a, b) => a - b);
    listB.sort((a, b) => a - b);
    let res = 0;
    for (let i = 0; i < N; i++) {
        res += Math.abs(listA[i] - listB[i]);
    }
    console.log(res);
})(Typical14 || (Typical14 = {}));
