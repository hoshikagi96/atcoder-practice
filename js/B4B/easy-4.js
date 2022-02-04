'use strict'

function main(input) {
    const n = Number(input); 
    let result = ':(';
    for (let i = 1; i <= n; i++) {
        if (Math.floor((i * 1.08))== n) {
            result = i;
            break;
        }
    }
    console.log(result);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`1001`)