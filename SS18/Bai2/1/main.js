
//Bài 1:

let products = [
    { id: 1, name: "Milk", count: 100 },
    { id: 2, name: "Orange", count: 80 },
    { id: 3, name: "Butter", count: 60 },
];
console.log("===Bài 1===");
//1.Thêm đối tượng mới
products.push({ id: 4, name: "Apple", count: 50 });
console.log("Sau khi thêm sản phẩm mới:");
console.log(products);
//2 Xóa đối tượng có id = 2
products = products.filter(product => product.id !== 2);
console.log("Sau khi xóa sản phẩm có id = 2:");
console.log(products);
//3 Cập nhật số lượng của sản phẩm có id = 3 thành 0
products = products.map(product => {
    if (product.id === 3) {
        return { ...product, count: 0 };
    }  
    return product;
});
console.log("Sau khi cập nhật số lượng sản phẩm có id = 3 thành 0:");
console.log(products);

//4. kiểm tra xem từ khóa butter có tồn tại hay không
let search = products.find(p => p.name === "Butter");
if (search) {
    console.log("Sản phẩm Butter tồn tại trong mảng.");
    console.log(search);
} else {
    console.log("Sản phẩm Butter không tồn tại trong mảng.");
}   
