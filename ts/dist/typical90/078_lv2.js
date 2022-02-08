"use strict";
// グラフの基礎　連想配列でグラフを表現する（ペアになっている数字同士が繋がっている）
var Typical78;
(function (Typical78) {
    const input = `7 18
7 2
1 6
5 2
1 3
7 6
5 3
5 6
5 4
1 7
2 6
3 4
5 1
4 7
4 6
5 7
3 2
4 2
1 4`;
    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");
    const tmp = input.trim().split('\n');
    const [N, M] = tmp[0].split(' ').map(Number);
    let graph = new Object();
    for (let i = 1; i <= M; i++) {
        const nums = tmp[i].split(' ').map(Number);
        if (!graph[nums[0]]) {
            graph[nums[0]] = [nums[1]];
        }
        else {
            graph[nums[0]].push(nums[1]);
        }
        if (!graph[nums[1]]) {
            graph[nums[1]] = [nums[0]];
        }
        else {
            graph[nums[1]].push(nums[0]);
        }
    }
    let count = 0;
    for (let j = 1; j <= N; j++) {
        const filtered = graph[j].filter((num) => {
            return num < j;
        });
        if (filtered.length === 1) {
            count++;
        }
    }
    console.log(count);
})(Typical78 || (Typical78 = {}));
