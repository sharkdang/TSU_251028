

// Viết chương trình đếm số nguyên âm trong một chuỗi.


let arr = [];
let count = 0;
let n = parseInt(prompt("Mảng có bao nhiêu phần tử"));

for (let i = 0; i < n; i++) {
    let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    arr.push(num);
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        count++;
    }
}

alert("Có " + count + " số nguyên âm");

