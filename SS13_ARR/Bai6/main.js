





// Khai báo mảng số nguyên có sẵn (ngẫu nhiên)
let arr = [];

for (let i = 0; i < 20; i++) {
    arr[i] = Math.floor(Math.random() * 100) + 1; 
}

// Nhập số cần kiểm tra
let k = parseInt(prompt("Nhập số nguyên k cần kiểm tra trong mảng:"));

// Đếm số lần xuất hiện của k
let kt = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
        kt++;
    }
}

// Hiển thị kết quả
alert("Mảng: " + arr.join(", "));

alert("Số " + k + " xuất hiện " + kt + " lần trong mảng.");
