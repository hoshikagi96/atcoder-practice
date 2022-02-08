// bit全探索、正しいカッコ列の判定
// 2進数に変換し、1 = '(' 0 = ')'　とする
// 全体で1と0の数が一致、かつ、左から見て常に0の数が1の数以上である必要がある

namespace Typical2 {
    const input = `10`

    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");

    const N = Number(input)

    function validateBrackets(str: string): boolean {
        const list = str.split('')
        let count0 = 0 // count of ')'
        let count1 = 0 // count of '('
        for (let i = 0; i < list.length; i++) {
            if (list[i] === '0') count0++
            if (list[i] === '1') count1++
            if (count0 > count1) {
                return false;
            }
        }
        return count0 === count1
    }

    const res = []
    for (let i = 0; i < 2 ** N - 1; i++) {
        const ptn = i.toString(2)
        if (ptn.length === N && validateBrackets(ptn)) {
            const ans = ptn.replace(/1/g, '(').replace(/0/g, ')')
            res.push(ans)
        }
    }
    console.log(res.reverse().join('\n'))
}
