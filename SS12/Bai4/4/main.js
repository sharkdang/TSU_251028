





let a = 0, b = 1;

while (true) {
    let next = a + b;
    a = b;
    b = next;

    if (next % 5 === 0) {
        console.log("Số Fibonacci đầu tiên chia hết cho 5 là: " + next);
        break;
    }
}
