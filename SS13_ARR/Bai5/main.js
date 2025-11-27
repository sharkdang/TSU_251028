



// Tạo số lượng phần tử ngẫu nhiên 
let length = Math.floor(Math.random() * 11) + 10;

//Math.rondom()*100:Tạo số ngẫu nhiên 0-99 
//Math.floor(): Làm tròn thành số nguyên

// chuyển sang dạng number
let arr = [];
for (let i = 0; i < length; i++) {
    arr[i] = Math.floor(Math.random() * 100) + 1;
}


let sole = 0;
let sochan = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sochan += arr[i];
    } else {
        sole += arr[i];
    }
}


alert("Mảng: " + arr.join(", "));

alert("Tổng số lẻ = " + sole);

alert("Tổng số chẵn = " + sochan);
