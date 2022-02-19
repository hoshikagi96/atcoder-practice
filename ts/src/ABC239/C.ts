namespace ABC238_C {
    const input = `1000000000 1000000000 999999999 999999999`

    // import * as fs from 'fs';
    // const input = fs.readFileSync("/dev/stdin", "utf8");

    const tmp = input.split(' ').map(Number)
    const posList = [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1]]
    
    const tmpX = tmp[0] - tmp[2]
    const tmpY = tmp[1] - tmp[3]

    function getRes() {
        for (let i = 0; i < 8; i++) {
            const distance = (tmpX - posList[i][0]) ** 2 + (tmpY - posList[i][1]) ** 2
            if (distance === 5) {
                return 'Yes'
                break
            }
        }
        return 'No'
    }
    
    console.log(getRes())

}