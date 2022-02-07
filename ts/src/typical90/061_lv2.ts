// デッキ（カードの山）の入れ替えと、数の書き出し

namespace typical61 {
const input = `6
1 2
1 1
2 3
3 1
3 2
3 3`

    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");

    const tmp = input.trim().split('\n')

    const Q = Number(tmp.shift());

    const cards = [];
    for (let i = 0; i < Q; i++) {
        const [t, x] = tmp[i].split(' ').map(Number);
        
        if (t === 1) {
            // 1の時、xを山札の一番上（先頭）に
            cards.unshift(x);
        } else if (t === 2) {
            // 2の時、xを山札の一番下(末尾)に
            cards.push(x);
        } else if (t === 3) {
            // 3の時、山札のx番目を出力
            console.log(cards[x - 1]);
        }
    }
}