



let arr = prompt('Nhập vào chuỗi số (cách nhau bằng khoảng trắng): ');

let newarr =arr.split(' ');

let max = newarr[0];

for (let i = 0; i < newarr.length; i++) {
    newarr[i] = Number(newarr[i]);
}

for (let i = 1; i < newarr.length; i++) {
  if (max < newarr[i]) {
    max = newarr[i];
  }
}
alert(`Giá trị lớn nhất = ${max}`);








