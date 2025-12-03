
//Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử khác nhau.
//  Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.

let arr = [];


for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));

    
    while (arr.includes(num)) {
        num = parseInt(prompt("Giá trị đã tồn tại. Nhập lại phần tử khác:"));
    }

    arr.push(num);
}


let max = arr[0];
let index = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        index = i;
    }
}


alert("Giá trị lớn nhất là:"+ max+" "+"Và vị trí của phần tử đó trong mảng là:"+ index);

