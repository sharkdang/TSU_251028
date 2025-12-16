

// function declaration
// Hàm trùng tên sẽ tính theo hàm được định nghĩa sau cùng
// Hàm có cơ chế hoisting nên có thể gọi hàm trước hay sau khi định nghĩa

// Cơ chế IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("Hàm IIFE được gọi ngay khi định nghĩa");
})();



// Xây dựng hàm tính tổng
console.log("Gọi hàm sum với 2 tham số:", sum(1, 2));
console.log("Gọi hàm sum với 2 tham số:", sum(10, 2));
console.log("Gọi hàm sum với 2 tham số:", sum(9, 2));

function sum(a, b) {
    console.log("Hàm sum được gọi: ", a, b);
    return a + b;
}
function sum(a, b) {
    console.log("Hàm sum được gọi: ", a, b);
    return a - b;
}


const firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const secondArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Hàm tính tổng 
function Sum(Array) {
    let total = 0;
    for (let i = 0; i < Array.length; i++) {
        total += Array[i];
    }
    return total;
}
console.log("Tổng mảng firstArray:", Sum(firstArray));
console.log("Tổng mảng secondArray:", Sum(secondArray));

