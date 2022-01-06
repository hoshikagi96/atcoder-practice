// 指定された範囲の数値の和を答える。　累積和を求めておく
// https://atcoder.jp/contests/typical90/tasks/typical90_j
'use strict'

function main(input) {
    const tmp = input.trim().split('\n');
    const N = Number(tmp.shift());
    const students = tmp.splice(0, N);
    const questions = tmp.slice(1);

    const c1Sum = [0];
    const c2Sum = [0];

    for (let s of students) {
        const student = s.split(' ').map(Number);
        const c1Prev = c1Sum[c1Sum.length - 1];
        const c2Prev = c2Sum[c2Sum.length - 1];
        if (student[0] == 1) {
            c1Sum.push(c1Prev + student[1]);
            c2Sum.push(c2Prev)
        } else if (student[0] == 2) {
            c1Sum.push(c1Prev);
            c2Sum.push(c2Prev + student[1]);
        } 
    }
    const results = [];
    for (let q of questions) {
        const [st, ed] = q.split(' ').map(Number);
        // console.log([st, ed]);
        let c1Ans = c1Sum[ed] - c1Sum[st - 1];
        let c2Ans = c2Sum[ed] - c2Sum[st - 1];
        results.push(`${c1Ans} ${c2Ans}`);
    }

    console.log(results.join('\n'));
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`20
2 90
1 67
2 9
2 17
2 85
2 43
2 11
1 32
2 16
1 19
2 65
1 14
1 51
2 94
1 4
1 55
2 90
1 89
1 35
2 81
20
3 17
5 5
11 11
8 10
3 13
2 6
3 7
3 5
12 18
4 8
3 16
6 8
3 20
1 12
1 6
5 16
3 10
17 19
4 4
7 15
`)