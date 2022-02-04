// 自分が含まれる列、行の数値の合計を全ての数について求める
// https://atcoder.jp/contests/typical90/tasks/typical90_d
'use strict'

function main(input) {
    const tmp = input.split('\n');
    const info = tmp.shift().split(' ');
    const H = Number(info[0]);
    const W = Number(info[1]);
 
    const list = [];
    const rowRes = [];
    const colRes = [];
    for (let i = 0; i < H; i++) {
        str = tmp[i];
        const nums = str.split(' ');
        let rowSum = 0;
        for (let j = 0; j < W; j++) {
            const num = Number(nums[j]);
            rowSum += num;
            colRes[j] ? colRes[j] += num : colRes[j] = num;
        }
        rowRes[i] = rowSum;
        list.push(nums);
    }
 
    const sumList = [];
    for (let i = 0; i < H; i++) {
        const sumRow = []
        for (let j = 0; j < W; j++) {
            const res = rowRes[i] + colRes[j] - list[i][j];
            sumRow.push(res);
        }
        sumList.push(sumRow.join(' '));
    }
    console.log(sumList.join('\n'));
}

main(`4 4
3 1 4 1
5 9 2 6
5 3 5 8
9 7 9 3`)
 
// main(require("fs").readFileSync("/dev/stdin", "utf8"));