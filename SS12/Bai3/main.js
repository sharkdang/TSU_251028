





//Viết chương trình kiểm tra xem số nhập vào phải là số nguyên tố hay k
//snt->là số chỉ chia hết cho 1 và chính nó

let n = parseInt(prompt("nhập n"));//n =20
let kt = 1;
if (n < 2) {
  kt = 0; // kt =0 ko phải là số nt
} else if (n == 2) {
  kt = 1; // kt=1 là số nt
} else {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      kt = 0;
    }
  }
}
if (kt == 1) {
  console.log(n + " là số nguyên tố");
} else {
  console.log(n + " ko phải số nguyên tố");
}
