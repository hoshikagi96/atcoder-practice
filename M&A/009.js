//　カードの選び方を2進数で表現　計算量が多いため、Nが増えるとTLEとなる 
'use strict'

function main(input) {
    const tmp = input.split('\n');
    const [N, S] = tmp.shift().split(' ').map(BigInt);
    const nums = tmp.shift().split(' ').map(BigInt);
    
    let res = 'No';
    for (let i = 0; i < N ** BigInt(2); i++) {
        const ptn = i.toString(2);
        console.log(ptn);
        let sum = BigInt(0);
        for (let j = 0; j < N; j++) {
            if (ptn[j] == "1") sum += nums[j];
        }
        console.log(sum)
        if (sum == S) {
            res = 'Yes';
        }
    }
    console.log(res);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`19 112
3 1 4 5 2 3 4 2 5 4 3 5 7 3 4 5 1 4 6`)