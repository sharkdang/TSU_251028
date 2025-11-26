






let x = 0, y = 1;
let sum = 0;

for (let i = 1; i <= 20; i++) {
    sum += x;
    let temp = x + y;
    x = y;
    y = temp;
}

console.log("Tổng 20 số Fibonacci đầu tiên là: " + sum);
