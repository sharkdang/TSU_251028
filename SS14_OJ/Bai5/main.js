let sinhVienList = [
  { id: 1, name: "john", age: 20 },
  { id: 2, name: "jack", age: 20 },
  { id: 3, name: "Davis", age: 20 },
];

while (true) {
  let choice = prompt(
    "CHƯƠNG TRÌNH QUẢN LÝ SINH VIÊN\n" +
      "1. Thêm sinh viên\n" +
      "2. Hiển thị danh sách\n" +
      "3. Xóa sinh viên theo ID\n" +
      "4. Để thoát chương trình"
  );

  if (choice === "1") {
    let idInput = prompt("Nhập mã số sinh viên ID:");
    let id = parseInt(idInput, 10);
    let name = prompt(`Nhập tên sinh viên (ID: ${idInput}):`);
    let ageInput = prompt(`Nhập tuổi của ${name}:`);
    let age = parseInt(ageInput, 10);

    // Kiểm tra hợp lệ
    if (
      !idInput ||
      !name ||
      !ageInput ||
      Number.isNaN(id) ||
      Number.isNaN(age)
    ) {
      alert(" Thông tin không hợp lệ");
      continue;
    }

    // Kiểm tra ID trùng
    let exists = sinhVienList.some(function (el) {
      return el.id === id;
    });
    if (exists) {
      alert(` ID ${id} đã tồn tại`);
      continue;
    }

    // Thêm
    let newSV = { id: id, name: name, age: age };
    sinhVienList.push(newSV);
    alert(" Thêm sinh viên thành công!");
    displayList();
  } else if (choice === "2") {
    displayList();
  } else if (choice === "3") {
    let idInput = prompt("Nhập id sinh viên muốn xóa:");
    let id = parseInt(idInput, 10);
    if (!idInput || Number.isNaN(id)) {
      alert("ID không hợp lệ.");
      continue;
    }

    let index = sinhVienList.findIndex(function (el) {
      return el.id === id;
    });

    if (index === -1) {
      alert(" ID sinh viên không tồn tại");
    } else {
      sinhVienList.splice(index, 1);
      alert(" Đã xóa sinh viên.");
      displayList();
    }
  } else if (choice === "4") {
    break;
  } else {
    alert("Lựa chọn không hợp lệ. Vui lòng nhập 1-4.");
  }
}

function displayList() {
  if (sinhVienList.length === 0) {
    alert("Danh sách sinh viên rỗng.");
    return;
  }

  let text = "Danh sách sinh viên:\n";
  for (let i = 0; i < sinhVienList.length; i++) {
    let sv = sinhVienList[i];
    text += `ID: ${sv.id}  |  Tên: ${sv.name}  |  Tuổi: ${sv.age}\n`;
  }
  alert(text);
}
