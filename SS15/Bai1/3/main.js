
// Viết chương trình khởi tạo nhập vào một mảng số nguyên.
//  Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình của các phần tử trong mảng.
let arr = [];

let n = parseInt(prompt("Mảng có bao nhiêu phần tử"));

for (let i = 0; i < n; i++) {
  let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
  arr.push(num);
}
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
let tong = 0;
for (let i = 0; i < arr.length; i++) {
  tong = tong + arr[i];
}
let tb = tong / n;
alert(
  "Giá trị lớn nhất là:" +
    max +
    " " +
    "Và Giá trị trung bình của các phần tử là:" +
    tb
);
