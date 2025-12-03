

//Viết chương trình nhập vào một mảng ký tự,
//  tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _ )

function replace(arr) {
     return arr.map(function(kt) {
        if (kt === '-') {
            return '_';
        }
        return kt;
    });
}


let arr = ['1', '-', 'b', '-', 'c'];

console.log(replace(arr));  
