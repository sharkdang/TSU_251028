
// tạo mảng courses với các khóa học ban đầu
let courses = [
    { name:"HTML",complete:"false"},
    { name:"CSS",complete:"false"},
    { name:"Node package Manager (npm)",complete:"false"},
    { name:"Basic of JavaScript",complete:"false"},
    { name:"Git",complete:"false"},
]
// vòng lặp vô hạn để liên tục yêu cầu người dùng nhập lựa chọn
while(true){
    // hiển thị menu lựa chọn
    let choice = prompt("Nhập 1 chữ cái C/R/U/D/E:").toUpperCase();
    switch(choice){
        
        // thêm khóa học mới
        case "C":
            let courseName = prompt("Nhập tên khóa học mới:");
            courses.push({name: courseName, complete: "false"});
            console.log("Khóa học mới đã được thêm:");
            console.log(courses);
            break;
            // hiển thị danh sách khóa học  
        case "R":
            console.log("Danh sách khóa học hiện tại:");
            console.log(courses);
            break;
        // cập nhật trạng thái hoàn thành của khóa học
        case "U":
            let updateName = prompt("Nhập tên khóa học cần cập nhật:");
            
            let courseToUpdate = courses.find(course => course.name === updateName);//Dùng find để tìm khóa học
            
            if (courseToUpdate) {
                courseToUpdate.complete = "true";
                console.log(`Khóa học "${updateName}" đã được cập nhật.`);
            } else {
                console.log(`Không tìm thấy khóa học có tên "${updateName}".`);
            }
            break;
        // xóa khóa học khỏi danh sách
        case "D":
            let deleteName = prompt("Nhập tên khóa học cần xóa:");
            courses = courses.filter(course => course.name !== deleteName);
            console.log(`Khóa học "${deleteName}" đã được xóa (nếu tồn tại).`);
            console.log(courses);   
            break;
        // thoát khỏi chương trình
        case "E":
            alert("Cảm ơn bạn đã đến với Rikkei Academy!");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng nhập lại.");

    }
};