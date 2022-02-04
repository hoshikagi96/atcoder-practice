'use strict'

function main(input) {
    const [H, W] = input.trim().split(' ').map(Number);

    let result = 0;
    if (H == 1 || W == 1) {
        result = 1;
    } else {
        result = Math.floor(H * W / 2);
        if (H % 2 != 0 && W % 2 != 0) {
            result += 1;
        }
    }
    console.log(result);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`7 3`)