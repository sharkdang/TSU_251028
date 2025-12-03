
//Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
//  Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.

let arr = [];
let count = 0;


for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
    arr.push(num);
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        count++;
    }
}

alert("Có " + count + " số nguyên lớn hơn 10.");
