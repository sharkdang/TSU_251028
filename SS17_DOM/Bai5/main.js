



document.getElementById("loginBtn").addEventListener("click", function () {
    // lấy phần tử id=loginBtn lànust đăng nhập
    //gắn sự kiện click vào nút đó
    // khi bấm nút thì chạy hàm trong fun


    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    // lấy dữ liệu ng dùng 
    //.trim(),giúp xóa khoảng trắng thừa 


    const fixedUser = "dang@gmail.com";
    const fixedPass = "123456";
    

    if (username === fixedUser && password === fixedPass) {
        alert("Đăng nhập thành công!");
    } else {
        alert("Đăng nhập thất bại! Vui lòng kiểm tra lại.");
    }
});
