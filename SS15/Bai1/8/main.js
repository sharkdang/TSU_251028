
//: Viết chương trình khởi tạo nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b. Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên. 
// Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c. Hiển thị mảng c

let arrA = [];
let arrB = [];
for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + " của mảng A:"));
  arrA.push(num);
}


for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + " của mảng B:"));
  arrB.push(num);
}

let arrC = arrA.concat(arrB);

alert("Mảng C là:"+arrC);