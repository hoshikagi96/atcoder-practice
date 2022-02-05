namespace Q15 {
    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");

    const input = ('33 88')

    const [A, B] = input.split(' ').map(Number)

    function getGCD(numA: number, numB: number): number {
        const f = (m: number, n: number): number => n? f(n, m % n): m;
        return f(numA, numB)
    }

    console.log(getGCD(A, B))
}