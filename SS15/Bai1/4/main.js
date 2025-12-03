
// Viết chương trình khởi tạo nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.

let n = parseInt(prompt("nhập số lượng phần tử "));
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(prompt(" nhập phần tử "));
}
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i] + " ");
}
