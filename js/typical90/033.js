// HかWが1の場合（例外/corner case）を考慮する
// https://atcoder.jp/contests/typical90/tasks/typical90_ag
'use strict'

function main(input) {
    const [H, W] = input.split(' ').map(Number);

    let ans = 0;
    if (H === 1 || W === 1) {
        ans = H * W;
    } else {
        ans = Math.ceil(H / 2) * Math.ceil(W / 2);
    }
    console.log(ans);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`3 7`)
