namespace ABC238_D {
    const input = `3 14 1 5`

    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");

    const tmp = input.trim().split(' ').map(Number)

    function isPrime(num: number): boolean {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    let safe = 0
    for (let i = tmp[0]; i <= tmp[1]; i++) {
        let count = 0
        for (let j = tmp[2]; j <= tmp[3]; j++) {
            if (isPrime(i + j)) {
                count++
                break
            }
        }
        if (!count) safe++
    }

    if (safe) {
        console.log('Takahashi')
    } else {
        console.log('Aoki')
    }
}