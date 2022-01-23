'use strict'

function main(input) {
    const tmp = input.split('\n');
    const [N,  M]= tmp.shift().split(' ').map(Number);
    const listS = tmp.shift().split(' ');
    const listT = tmp.shift().split(' ');

    let latestT = 0;
    for (let i = 0; i < N; i++) {
        if (listS[i] == listT[latestT]) {
            console.log('Yes');
            latestT++
        } else {
            console.log('No');
        }
    }
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`5 3
tokyo kanda akiba okachi ueno
tokyo akiba ueno`)