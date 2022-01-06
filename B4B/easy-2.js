'use strict'

function main(input) {
    const tmp = input.trim().split('\n');
    const N = Number(tmp[0]);
    const nums = tmp[1].split(' ').map(Number);
    const total = nums.reduce((sum, num) => {
        return sum + num;
    });
    const avg = total / N;

    let ans1 = 0;
    let ans2 = 0;
    for (let i = 0; i < N; i++) {
        ans1 += (nums[i] - Math.ceil(avg)) ** 2
        ans2 += (nums[i] - Math.floor(avg)) ** 2
    }
    console.log(Math.min(ans1, ans2));
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`7
14 14 2 13 56 2 37`)