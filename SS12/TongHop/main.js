


let name = "";
let age = 0;
let array = [];

while (true) {
    let choice = parseInt(prompt(
`
1. Nhập tên
2. Nhập tuổi
3. In tên và tuổi
4. In bảng cửu chương của một số
5. Kiểm tra số chẵn hay lẻ
6. Tính tổng từ 1 đến N
7. In các số trong 1 dãy (người dùng nhập dãy số)
8. Kiểm tra số người dùng nhập có phải số nguyên tố hay không
9. Đảo ngược chuỗi người dùng nhập
10. Thoát
`
    ));

    switch (choice) {

        case 1:
            name = prompt("Nhập tên của bạn:");
            alert("Đã lưu tên!");
            break;

        case 2:
            age = parseInt(prompt("Nhập tuổi:"));
            alert("Đã lưu tuổi!");
            break;

        case 3:
            alert("Tên: " + name + "\nTuổi: " + age);
            break;

        case 4:
            let num = parseInt(prompt("Nhập số cần in bảng cửu chương:"));
            let result = "";
            for (let i = 1; i <= 9; i++) {
                result += `${num} x ${i} = ${num * i}\n`;
            }
            alert(result);
            break;

        case 5:
            let n = parseInt(prompt("Nhập số cần kiểm tra:"));
            if (n % 2 === 0){
            alert(n + " là số chẵn");
            }else{
             alert(n + " là số lẻ");
            break;}

        case 6:
            let N = parseInt(prompt("Nhập N:"));
            let tong = 0;
            for (let i = 1; i <= N; i++) {
                tong += i;
            }
            alert("Tổng từ 1 đến "+N+ " là:" + tong);
            break;

        case 7:
            let length = parseInt(prompt("Nhập số lượng phần tử của dãy:"));
            array = [];
            for (let i = 0; i < length; i++) {
               (parseInt(prompt(`Nhập phần tử thứ ${i+1}:`)));
            }
            alert("Dãy bạn vừa nhập: " + (", "));
            break;

        case 8:
            let k = parseInt(prompt("Nhập số cần kiểm tra:"));

            let snt = true;

            if (k < 2) {
                snt = false;
            } else {
                for (let i = 2; i <= Math.sqrt(k); i++) {
                    if (k % i === 0) {
                        snt = false;
                        break;
                    }
                }
            }
            if (snt) {
                alert(k + " là số nguyên tố");
            } else {
                alert(k + " không phải số nguyên tố");
            }

            break;

        case 9:
            let str = prompt("Nhập chuỗi cần đảo:");
            let day = "";
            for(let i = str.length-1 ;i>=0;i-- ){
                day +=str[i];
            }
            alert("Dãy số đảo ngược: " + day);
            break;

        case 10:
            alert("Thoát chương trình.");
            throw "Kết thúc chương trình";

        default:
            alert("Lựa chọn không hợp lệ. Nhập từ 1-10.");
    }
}
