




// Tạo mảng lưu trữ các ký tự đã nhập
const buttons = document.querySelectorAll('.btn');
const textarea = document.querySelector('textarea');

const deleteBtn = document.querySelector('.delete');
const spaceBtn = document.querySelector('.space');

let chars = [];
// Thêm sự kiện click cho từng nút
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText;
        chars=textarea.value.split('');
        console.log(chars);
    });
});
// Xử lý nút xóa và nút cách
deleteBtn.addEventListener('click', () => {
    chars.pop();
    textarea.value = textarea.value.slice(0, -1);
});
spaceBtn.addEventListener('click', () => {
    textarea.value += ' ';
    chars.push(' ');
});

