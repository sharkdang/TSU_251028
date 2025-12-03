
// / Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. Nhập phần tử số nguyên và tìm xem số đó có nằm trong mảng số nguyên không? Nếu có thuộc mảng số nguyên
// thì in ra "Number X is in the array" còn lại in ra "Number X is not in the array".

let arr = [];

for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
  arr.push(num);
}

let x = parseInt(prompt("Nhập số x cần tìm:"));

let kt = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === x) {
    kt = true;
    break;
  }
}

if (kt) {
  alert("Number " + x + " is in the array");
} else {
  alert("Number " + x + " is not in the array");
}
