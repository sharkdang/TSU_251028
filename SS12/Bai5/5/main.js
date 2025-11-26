



let tien = parseInt(prompt("Nhập số tiền ban đầu: "));
let thang = parseInt(prompt("Nhập số tháng gửi: "));
let ls = parseInt(prompt("Nhập lãi suất (%) mỗi tháng: ")) / 100;

let amount = tien * Math.pow(1 + ls, thang);

console.log("Số tiền nhận được sau " + thang + " tháng là: " + amount.toFixed(2));
