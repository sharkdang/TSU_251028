

// Cho người dùng nhập vào chuỗi ký tự và viết hàm kiểm tra xem đó có phải chuỗi ký tự đối xứng không:

// Người dùng nhập chuỗi bằng hàm prompt()
// Viết hàm isPalindrome() để kiểm tra chuỗi đối xứng
// Thực hiện thông báo cho người dùng bằng alert() có phải chuỗi đối xứng không
 

let str = prompt("Nhập chuỗi kí tự :")

function isPalindrome(str) {
  let kt = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      kt = 1;
      break;
    }
  }

  if (kt === 0) {
    return "chuỗi đối xứng";
  } else {
    return "chuỗi không đối xứng";
  }
}


alert(isPalindrome(str));




