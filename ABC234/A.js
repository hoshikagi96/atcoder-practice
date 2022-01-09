'use strict'

function main(input) {
    const t = Number(input);
    const f = (x) => x * x + x * 2 + 3;
    const res = f(f(f(t) +  t) + f(f(t)));
    console.log(res);
}


// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`10`)