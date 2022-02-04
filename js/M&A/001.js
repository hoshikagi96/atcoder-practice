'use strict'

function main(input) {
    const N = Number(input);
  	console.log(N + 5);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
