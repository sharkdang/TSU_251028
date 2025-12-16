console.log("document", document.getElementById("heading-1"));

console.log("document", document.getElementById("heading-2"));

// Lấy ra 1 phần tử là class là box
console.log("document", document.querySelector(".box"));
// Lấy ra tất cả phần tử là class là box
// kết quả trả về là NodeList (giống mảng tuy nhiên có 1 số điểm khác biệt)
// NodeList có thể dùng được forEach nhưng không dùng được các phương thức của mảng như map, filter, reduce,...
//ko dùng được các phươn thúc của push(), pop(), shift(), unshift()...
console.log("document", document.querySelectorAll(".box")); 



// Thay đổi nội dung phần tử trong DOM 
const box1 = document.querySelector(".box");
console.log("box1", box1.innerText);
box1.innerText = "Nội dung đã được thay đổi";
console.log("box1", box1.innerText);

// khác nhau giữa innerText và innerHTML và textContent

