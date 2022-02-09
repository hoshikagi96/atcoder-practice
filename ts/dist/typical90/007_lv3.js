"use strict";
// 二分探索
var Typical7;
(function (Typical7) {
    const input = `1
4000
10
3582
3538
3320
3312
3296
3257
3111
3040
3013
2994`;
    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");
    const tmp = input.trim().split('\n');
    const N = Number(tmp.shift());
    const classes = tmp.shift().split(' ').map(Number);
    const Q = Number(tmp.shift());
    const students = tmp.map(Number);
    // 昇順にソート
    classes.sort((a, b) => a - b);
    function binarySearch(list, target) {
        let index = -1;
        let min = 0;
        let max = list.length - 1;
        while (max - min > 1) {
            index = Math.floor((min + max) / 2);
            if (list[index] >= target) {
                max = index;
            }
            else {
                min = index;
            }
        }
        return list[min] >= target ? min : max;
    }
    for (let i = 0; i < Q; i++) {
        const student = students[i];
        const idx = binarySearch(classes, student);
        const more = Math.abs(classes[idx] - student);
        const less = classes[idx - 1] ? Math.abs(classes[idx - 1] - student) : -1;
        console.log(less !== -1 ? Math.min(more, less) : more);
    }
})(Typical7 || (Typical7 = {}));
