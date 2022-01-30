'use strict'

function main(input) {
    const S = input.trim().split('');

    let i = 0;
    while (S[i] === 'a') {
        i++
    }
    let j = 1;
    while (S[S.length - j] === 'a') {
        j++;
    }

    let ans = 'Yes';
    if (i > j - 1) {
        ans = 'No'
    } else {
        for (let k = 0; k < (S.length - i - j) / 2; k++) {
            if (S[i + k] !== S[S.length - (j + k)]) {
                ans = 'No'
                break;
            }
        }
    }
    

    console.log(ans)
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`jijijijijijijijaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`)