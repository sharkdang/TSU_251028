//Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược. Ví dụ, nếu một mảng chứa các ký tự [ ‘c’, ‘s’, ‘c’, ‘2’, ‘6’, ‘1’ ]
//  sau khi thực hiện đảo ngược sẽ là “261csc”

function reverseArr(arr) {
    return arr.reverse().join('');
}

let arr = ['c', 's', 'c', '2', '6', '1'];
console.log("Kết quả mảng:", reverseArr(arr));