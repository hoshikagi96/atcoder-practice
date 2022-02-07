// TODO: 全探索だとTLE?

namespace Typical55 {
    const input = `10 1 0
0 0 0 0 0 0 0 0 0 0`
    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");

    const tmp: string[] = input.split('\n');
    const [N, P, Q] = tmp[0].split(' ').map(BigInt);
    const nums = tmp[1].split(' ').map(BigInt);
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
    console.log(count)
}