

//Tạo danh sách sinh viên
let students = [
    { name: "Anh", age: 20, class:"A1" },
    { name: "Tuấn", age: 22, class: "A2" },
    { name: "Thu", age: 22, class: "A1" },
    { name: "Ngọc", age: 21, class: "A3" },
];
// Tham chiếu đến các phần tử DOM
const studentList = document.getElementById("studentList");
const studentInput = document.getElementById("student-name");
const ageInput = document.getElementById("student-age");
const classInput = document.getElementById("student-class");
const addBtn = document.getElementById("add-student-btn");
const searchInput = document.getElementById("search-input");

let editIndex = -1; // Chỉ số sinh viên đang được chỉnh sửa

// Sự kiện nút thêm sinh viên
addBtn.addEventListener("click", addStudent);
searchInput.addEventListener("input", searchStudents);

// Hàm hiển thị danh sách sinh viên
function renderStudents() {
    studentList.innerHTML = "";
    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.class}</td>
            <td class="action-column">
                <button class="btn btn-edit" onclick="editStudent(${index})">Sửa</button>
                <button class="btn btn-delete" onclick="deleteStudent(${index})">Xóa</button>
            </td>
        `;
        studentList.appendChild(row);
    }); 
}
// Hàm thêm hoặc cập nhật sinh viên
function addStudent() {
    // Lấy giá trị từ các ô nhập liệu
    const name = studentInput.value.trim();
    const age = parseInt(ageInput.value) || 0;
    const className = classInput.value.trim();
    
    if (!name || !className || !age) {
        alert("Vui lòng điền đầy đủ thông tin");
        return;
    }
    
    if (editIndex === -1) {
        // Thêm sinh viên mới
        students.push({ name, age, class: className });
    } else {
        // Cập nhật sinh viên đã chỉnh sửa
        students[editIndex] = { name, age, class: className };
        editIndex = -1;
        addBtn.textContent = "Thêm sinh viên";
    }
    
    studentInput.value = "";
    ageInput.value = "";
    classInput.value = "";
    renderStudents();
}
// Xóa sinh viên
function deleteStudent(index) {
    students.splice(index, 1);
    if (editIndex === index) {
        editIndex = -1;
        addBtn.textContent = "Thêm sinh viên";
        studentInput.value = "";
        ageInput.value = "";
        classInput.value = "";
    }
    renderStudents();
}   
// Sửa sinh viên
function editStudent(index) {
    const student = students[index];
    studentInput.value = student.name;
    ageInput.value = student.age;
    classInput.value = student.class;
    editIndex = index;
    addBtn.textContent = "Cập nhật sinh viên";
    studentInput.focus();
}
// Tìm kiếm sinh viên
function searchStudents() {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = students.filter(s => s.name.toLowerCase().includes(query));
    
    studentList.innerHTML = "";
    filtered.forEach((student, index) => {
        const actualIndex = students.indexOf(student);
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.class}</td>
            <td class="action-column">
                <button class="btn btn-edit" onclick="editStudent(${actualIndex})">Sửa</button>
                <button class="btn btn-delete" onclick="deleteStudent(${actualIndex})">Xóa</button>
            </td>
        `;
        studentList.appendChild(row);
    });
}

// Khởi tạo danh sách sinh viên ban đầu
renderStudents();



