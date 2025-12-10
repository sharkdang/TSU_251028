

const inputValue =document.getElementById('user-input'); //lấy phần hiển thị kết quả
const number =document.querySelectorAll('.numbers');  // lấy tất cả các nút số
const calculate = document.querySelectorAll('.operations'); // lấy các phép toán


// Xử lí bấm số
number.forEach((item)=>{ // duyệt qua tất cả các nút
    item.addEventListener('click',(e) =>{ //khi click vào 1 nút số thì chạy hàm 
        if(inputValue.innerText === 'NaN' ||inputValue.innerText === '0'){
            inputValue.innerText = '';
        } // nếu màn hình đang là NaN or 0 thì xóa màn hình nhập lại số mới

        inputValue.innerText += e.target.innerHTML.trim();// thêm số vừa bấm vào màn hình
    })
})

// Xử lí bấm toán tử
calculate.forEach((item)=>{ // duyệt qua các nút trong operations
    item.addEventListener('click',(e)=>{ // khi bấm phép toán thì chạy hàm
        let lastValue = inputValue.innerText.slice(-1);// kí tự cuối cùng trên màn hình(Dùng để kiểm tra xem kí tự cuối là số hay toán tử)

        if(!isNaN(lastValue)&& e.target.innerHTML === '='){ // Tránh lỗi kí tự cuối là phép toán tử
            inputValue.innerText = eval(inputValue.innerText);

        } else if (e.target.innerHTML === 'AC'){// bấm AC thì reset
            inputValue.innerText = 0;

        }else if(e.target.innerHTML === 'DEL'){ // bấm DEL thì xóa kí tự cuối cùng trên màn hình
            inputValue.innerText = inputValue.innerText.slice(0, -1);
            
            if(inputValue.innerText.length == 0){// nếu xóa hết thì đưa màn hình về 0
                inputValue.innerText = 0;
            }
        }else if(!isNaN(lastValue)){ // NGăn lỗi các phép toán tử nhập liên tục
            inputValue.innerText += e.target.innerHTML;
        }
        
    })
})