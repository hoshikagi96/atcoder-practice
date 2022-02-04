'use strict'

function main(input) {
    const tmp = input.split('\n');
    const Q = Number(tmp.shift());

    const cards = [];
    for (let i = 0; i < Q; i++) {
        const [t, x] = tmp[i].split(' ').map(Number);
        switch (t) {
            case 1:
                cards.unshift(x);
                break;
            case 2:
                cards.push(x);
                break;
            case 3:
                console.log(cards[x - 1]);
                break;
            default:
                break;
        }
        
        if (t === 1) {
            cards.unshift(x);
        } else if (t === 2) {
            cards.push(x);
        } else if (t === 3) {
            console.log(cards[x - 1]);
        }
    }
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`6
1 2
1 1
2 3
3 1
3 2
3 3`)