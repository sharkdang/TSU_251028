
//Bài 1: Tạo một đối tượng chứa thông tin về một người bao gồm tên, tuổi, địa chỉ và số điện thoại.
//  Sau đó truy xuất các thuộc tính của đối tượng trên


// Thông tin đối tượng person 
const person = {
    name:"Nguyễn Văn Tuấn",
    age:20,
    address:"Hà Nội",
    phone:"0123456789",
}; 

// Truy xuất và in các thuộc tính của đối tượng person
console.log("Tên: " + person.name);
console.log("Tuổi: " + person.age);
console.log("Địa chỉ: " + person.address);
console.log("Số điện thoại: " + person.phone);

// Bài 2: Viết chương trình tạo đối tượng student có cặp key và value tương ứng như dưới đây,
//  sau đó khởi tạo đối tượng newStudent có các thuộc tính tương tự (value tự điền).
//  Sau đó tạo mảng “students” để chứa chúng. Cuối cùng truy xuất các thuộc tính của đối tượng “newStudent” sau khi thêm vào mảng “students”

// Tạo đối tượng student
const student = {
    id: "1",
    name: "Phạm Thu",
    gender: "Nữ",
    age: 22,
    mark:10,
};

// Khởi tạo đối tượng newStudent
const newStudent = { ...student}; // Tạo đối tượng mới giống student
const students = []; //Tạo mảng rỗng chứa sinh viên
students.push(newStudent); // Thêm newStudent vào mảng students

// Truy xuất và in các thuộc tính của đối tượng newStudent

console.log("=== Thông tin sinh viên mới ===");
console.log(newStudent);


//Bài 3: Với dữ liệu từ bài 2 hãy tìm ra học sinh có điểm cao nhất và in ra toàn bộ thông tin của học sinh đó

//thêm một số sinh viên vào mảng students để kiểm tra
students.push(
    { id: "2", name: "Lê Quang Đăng", gender: "Nam", age: 21, mark: 8 },
    { id: "3", name: "Trần Linh", gender: "Nữ", age: 23, mark: 9.5 }
);
console.log("===Tất cả học sinh trong mảng===");
console.log(students);


// đặt biến topStudent là sinh viên đầu tiên trong mảng
let topStudent = students[0];
for (let i = 1; i < students.length; i++) {
    if (students[i].mark > topStudent.mark) {
        topStudent = students[i];
    } }; 
console.log("=== Học sinh có điểm cao nhất ===");
console.log(topStudent);