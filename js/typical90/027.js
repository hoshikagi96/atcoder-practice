// 文字列が既出かどうか判定。indexOfだとTLEするのでObjのkeyとして格納して検索
// https://atcoder.jp/contests/typical90/tasks/typical90_aa
'use strict'

function main(input) {
    const tmp = input.split('\n');
    const N = Number(tmp.shift());
    
    const registered = {};
    for (let i = 0; i < N; i++) {
        if (!registered[tmp[i]]) {
            console.log(i + 1);
            registered[tmp[i]] = true;
        }
    }
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`5
e869120
atcoder
e869120
square1001
square1001`)