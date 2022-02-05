"use strict";
var ABC238_B;
(function (ABC238_B) {
    const input = `4
90 180 45 195`;
    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");
    const tmp = input.trim().split('\n');
    const N = Number(tmp.shift());
    const list = tmp[0].split(' ').map(Number);
    const points = [0, 360];
    let lastPos = 0;
    for (let i = 0; i < N; i++) {
        const pos = lastPos + list[i];
        points.push(pos < 360 ? pos : pos - 360);
        lastPos = pos < 360 ? pos : pos - 360;
    }
    points.sort((a, b) => {
        return (a < b ? -1 : 1);
    });
    const diffs = [];
    for (let i = 0; i < N + 1; i++) {
        diffs.push(points[i + 1] - points[i]);
    }
    console.log(Math.max(...diffs));
})(ABC238_B || (ABC238_B = {}));
