'use strict'

function main(input) {
    const number = Number(input.split(' ').join(''));

    let ans = 'No';
    for (let i = 1; i < 1000; i++) {
        if (i**2 === number) {
            ans = 'Yes';
            break;
        }
    }

    console.log(ans);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`100 100`)