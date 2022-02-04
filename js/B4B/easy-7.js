'use strict'

function main(input) {
    const tmp = input.trim().split('\n');
    const cardNums = tmp.splice(0, 3);
    const nums = tmp.map(Number);
    const results = [];
    for (let i = 0; i < 3; i++) {
        const row = cardNums[i].split(' ').map(Number);
        const res = row.map((n) => {
            return nums.includes(n);
        });
        results.push(res);
    }
    
    let ans = 'No';
    if ((results[0][0] && results[1][1] && results[2][2]) ||
    (results[0][2] && results[1][1] && results[2][0])) {
        ans = 'Yes';
    } else {
        for (let i = 0; i < 3; i++) {
            if (results[i][0] && results[i][1] && results[i][2]) {
                ans = 'Yes';
                break;
            } else if (results[0][i] && results[1][i] && results[2][i]) {
                ans = 'Yes';
                break;
            }
        }
    }

    console.log(ans);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`60 88 34
92 41 43
65 73 48
10
60
43
88
11
48
73
65
41
92
34`)