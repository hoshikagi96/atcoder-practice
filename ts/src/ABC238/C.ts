namespace ABC238_C {
    const input = `999999999999999999`

    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");

    const N = BigInt(input)

    function getSum(N: bigint) {
        if (N % 2n === 0n) {
            return (1n + N) * (N / 2n)
        } else {
            return 1n + ((2n + N) * ((N - 1n) / 2n)) 
        }
    }

    function main(N: bigint) {
        let total = 0n;
        const strN = N.toString()
        for (let i = 1; i < strN.length; i++) {
            const count = BigInt('9' + '0'.repeat(i - 1))
            const sum = getSum(count)
            total += sum
        }
        const tmp = N - BigInt('9'.repeat(strN.length - 1))
        const tmpSum = tmp ? getSum(tmp): 0n
        total +=  tmpSum
        console.log((total % 998244353n).toString())
    }

    main(N)
}