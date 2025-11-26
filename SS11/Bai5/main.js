



let canNang = parseInt(prompt("Nhập Cân Nặng :"));

let chieuCao = parseInt(prompt("Nhập Chiều cao :"));

let BMI = canNang / (chieuCao * chieuCao);

if (BMI < 18.5) {
  alert(BMI+"Gầy");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  alert(BMI+"Bình Thường");
// } else if (BMI >= 25) {
//   alert(BMI+"Thừa cân");
} else if (BMI >= 25 && BMI <= 29.9) {
  alert(BMI+"Tiền Béo phì");
} else if (BMI >= 30 && BMI <= 34.9) {
  alert(BMI+"Béo phì độ 1");
} else if (BMI >= 35 && BMI <= 39.9) {
  alert(BMI+"Béo phì 2");
} else  {
  alert(BMI+"Béo phì độ 3");
}

