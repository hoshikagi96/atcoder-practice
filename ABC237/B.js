'use strict'

function main(input) {
    const tmp = input.split('\n');
    const [H, W] = tmp.shift().split(' ').map(Number);

    const res = new Array(W);
    for (let i = 0; i < H; i++) {
        const list = tmp[i].split(' ')
        for (let j = 0; j < W; j ++) {
            const num = list[j];
            if (res[j]) {
                res[j] += ' ' + String(num);
            } else {
                res[j] = String(num);
            }
            
        }
    }
    
    console.log(res.join('\n'));
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`4 3
1 2 3
4 5 6
7 8 9
10 11 12`)