



let original ={
    name:'Bob',
    age:30,
}
//copy Chuyển đổi object thành chuỗi JSON rồi phân tích ngược lại thành object mới

let copy = JSON.parse(JSON.stringify(original));

// thay dổi

copy.name = 'Charlie';

console.log(original);

console.log(copy);