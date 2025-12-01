

let bookList =[
    {id:1,name:"Sách 1",author:"Tác Giả 1",year:"2000"},
    {id:2,name:"Sách 2",author:"Tác Giả 2",year:"2000"},
    {id:3,name:"Sách 3",author:"Tác Giả 3",year:"2000"},
];

while( true ){
    let choice = prompt(
        "--- QUẢN LÝ SÁCH ---\n"+
        "1. Thêm sách mới\n"+
        "2. Hiển thị danh sách sách\n"+
        "3. Tìm kiếm sách theo tên\n"+
        "4. Xóa sách theo ID\n"+
        "5. Thoát chương trình\n"+
        " Nhập lựa chọn của bạn:\n"
    );
    if(choice === "1"){
        let idInput = prompt("Nhập ID sách");
        let id = parseInt(idInput);

        let exists = bookList.some(function (el) {
        return el.id === id;
        });
        if (exists) {
        alert(` ID ${id} đã tồn tại`);
        continue;
        }
        let name = prompt("Nhập tên sách");
        let author = prompt("Nhập tên Tác Giả");
        let yearInput = prompt("Nhập năm xuất bản");
        let year = parseInt(yearInput);
        
        if(!idInput || !name || !author || Number.isNaN(id) || Number.isNaN(year) || !yearInput){
            alert("Thông tin không hợp lệ");
            continue;
        }
        

        bookList.push({id ,name ,author ,year});
        alert("Thêm sách thành công");
        displayList();
    }else if( choice === "2"){
        displayList();
    }else if( choice === "3"){
        let idInput = prompt("Nhập ID sách muốn tìm:");
        let id = parseInt(idInput,10);

        let book = bookList.find(function(el){
            return el.id === id;
        });
        if(book){
             alert(
            " Cuốn sách tìm được:\n" +
            `ID:${book.id} | Tên Sách:${book.name} | Tác Giả:${book.author} | Năm Xuất Bản:${book.year}`
        );
        }else{
            alert("Không tìm thấy sách muốn tìm")
        }

    }else if( choice === "4"){
            let idInput = prompt("Nhập ID sách muốn xóa:");
            let id = parseInt(idInput,10);

            let index = bookList.findIndex(function (el) {
            return el.id === id;
            });

            if (index === -1) {
            alert(" ID sách không tồn tại");
            } else {
            bookList.splice(index, 1);
            alert(" Đã xóa sách.");
            displayList();
            }



    }else if( choice === "5"){
        break;
}
}
function displayList(){
    let text = "Quản lí sách\n\n";
    for(let i = 0; i < bookList.length; i++){
        let book = bookList[i];
        text +=`ID:${book.id} | Tên Sách:${book.name} | Tác Giả:${book.author} | Năm Xuất Bản:${book.year}\n`;

    }
    alert(text);
}

