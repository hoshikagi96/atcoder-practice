// TODO: jsだとTLE?
'use strict'

function main(input) {
    const tmp = input.split('\n');
    const [N, P, Q] = tmp.shift().split(' ').map(BigInt);
    const nums = tmp.shift().split(' ').map(BigInt);

    let count = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < i; j++) {
            for (let k = 0; k < j; k++) {
                for (let l = 0; l < k; l++) {
                    for (let m = 0; m < l; m++) {
                        if (nums[i] * nums[j] * nums[k] * nums[l] * nums[m] % P === Q) {
                            count++;
                        }
                    }
                }
            }
        }
    }
    console.log(count);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`10 1 0
0 0 0 0 0 0 0 0 0 0`)