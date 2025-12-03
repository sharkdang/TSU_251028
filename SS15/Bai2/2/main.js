
//Viết một chương trình khai báo một mảng ký tự. In ra số “ký tự số” trong mảng.

function countArr(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= '0' && arr[i] <= '9') {
            count++;
        }
    }
    return count;
}

let arr = ['a', '1', 'b', '2', 'c', '3'];
console.log(countArr(arr));  
