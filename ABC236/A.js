'use strict'

function main(input) {
    const tmp = input.split('\n');
    const S = tmp.shift().split('');
    const [a, b] = tmp.shift().split(' ').map(Number);

    const charA = S[a - 1];
    const charB = S[b - 1];

    S[b - 1] = charA;
    S[a - 1] = charB;

    console.log(S.join(''));
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`chokudai
3 5`)