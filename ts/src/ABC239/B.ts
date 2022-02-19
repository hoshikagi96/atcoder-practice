namespace ABC238_B {
    const input = `-5`

    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");

    const N = BigInt(input)

    if (0 > N && N > -10) {
        console.log('-1')
    } else {
        let ans: bigint = N / 10n
        if (ans >= 0n) {
            console.log(ans.toString())
        } else if (N % 10n === 0n) {
            console.log(ans.toString())
        } else {
            ans = ans - 1n
            console.log(ans.toString())
        }
    }
    
}