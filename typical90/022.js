// 直方体を、最小回数の分割で立方体にする。　ユークリッド互除法（最大公約数）
// https://atcoder.jp/contests/typical90/tasks/typical90_v
'use strict'

function main(input) {
    const [a, b, c] = input.trim().split(' ').map(BigInt);
    const f = (m, n) => n? f(n, m % n): m;
    let l = f(a, b);
    l = f(l, c);
    const aCount = a / l;
    const bCount = b / l;
    const cCount = c / l;
    console.log(String(aCount + bCount + cCount - BigInt(3)));
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
// main(`100 15 300`)

main(`1000000000000000000 999999999999999999 999999999999999998`)
// オーバーフローするため常にBigIntに変換