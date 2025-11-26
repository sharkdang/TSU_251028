

let i = 0;
let tong = 0;
let n = 1;

while (i < 30) {
    if (n % 7 === 0) {
        tong += n;
        i++;
    }
    n++;
}

console.log("Tổng 30 số tự nhiên đầu tiên chia hết cho 7 là: " + tong);
