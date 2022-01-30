'use strict'

function main(input) {
    const [N, S] = input.split('\n')
    const list = S.split('')

    const L = []
    const R = []
    
    for (let i = 0; i < N; i++) {
        if (list[i] === 'L') {
            R.push(i)
        } else if (list[i] === 'R') {
            L.push(i)
        }
    }
    
    const A = [...L, N, ...R.reverse()]
    console.log(A.join(' '))
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`5
LRRLR`)