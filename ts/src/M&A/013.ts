namespace Q13 {
    const input = '12'

    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");
    
    const N = Number(input)
    
    function getAllDivisor(num: number): number[] {
        const nums = [];
        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                nums.push(i)
                if (num / i !== i) {
                    nums.push(num / i)
                }
            }
        }
        return nums;
    }
    
    console.log(getAllDivisor(N).join('\n'))
}

