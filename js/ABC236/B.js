'use strict'

function main(input) {
    const tmp = input.split('\n');
    const N = Number(tmp.shift());
    const nums = tmp.shift().split(' ').map(Number);
    const count = {};

    for (let i = 0; i < N * 4 - 1; i ++) {
        if (count[nums[i]]) {
            count[nums[i]] += 1;
        } else {
            count[nums[i]] = 1;
        }

        if (count[nums[i]] === 4) {
            delete count[nums[i]]
        }
    }

    console.log(Object.keys(count)[0]);
    
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`3
1 3 2 3 3 2 2 1 1 1 2`)