
function main(input) {
    const num = Number(input);

    let n = 1;
    while (n * 2 <= num) {
        n = n * 2
    }
    console.log(n);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(`1000`)