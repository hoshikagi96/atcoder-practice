namespace Q16 {
    const input = `3
    50 350 75`

    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");

    const tmp = input.split('\n')
    const N = Number(tmp.shift())
    const nums = tmp[0].trim().split(' ').map(Number);

    function getGCDOfAll(N: number, nums: number[]): number {
        const f = (m: number, n: number): number => n? f(n, m % n): m
        let lastRes = 0;
        for (let i = 0; i < N; i++) {
            lastRes = f(nums[i], lastRes);
        }
        return lastRes
    }

    console.log(getGCDOfAll(N, nums))
}

