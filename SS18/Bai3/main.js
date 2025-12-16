
// Tạo mảng 
let todos = [
        { title: "Xin việc ở Google", done: true },
        { title: "Mua biệt thự", done: true },
        { title: "Cưới vợ", done: false },
        { title: "Mua xe hơi", done: false },
        { title: "Sinh con", done: false },
        { title: "Đi du lịch vòng quanh thế giới", done: false },
    ];
//Lấy thẻ html có id todoList và todoInput
    const todoList = document.getElementById("todoList");
    const todoInput = document.getElementById("todoInput");
//Hàm render hiển thị danh sách
    function renderTodos() {
        todoList.innerHTML = "";
        //Duyệt từng phần tử trong mảng todos
        //vd todo là 1 object , index là vị trí
        todos.forEach((todo, index) => {
            //Tạo thẻ li cho mỗi công việc
            const li = document.createElement("li");
            //template HTML cho mỗi công việc,todo.title là tiêu đề công việc
            //Phần span để CSS gạch ngang và đổi màu nếu ${todo.done = true }
            //Phần button để gọi hàm toggleDone(true là chưa xong) và deleteTodo với index tương ứng
            li.innerHTML = `
                <span class="${todo.done ? "done" : ""}">${todo.title}</span>
                <div>

                    <button class="btn" onclick="toggleDone(${index})">
                        ${todo.done ? "Chưa xong" : "Xong rồi"}
                    </button>
                    <button class="btn" onclick="deleteTodo(${index})">Xoá</button>
                </div>
            `;
            //Thêm công việc vừa tạo vào danh sách
            todoList.appendChild(li);
        }
        );
    }
    //Hàm thêm công việc mới
    function addTodo() {
        //Lấy nội dung người dùng nhập
        const title = todoInput.value.trim();

        if (title) {
            todos.push({ title, done: false });
            todoInput.value = "";
            renderTodos();
        }   
    }
    //Hàm chuyển trạng thái công việc
    function toggleDone(index) {
        todos[index].done = !todos[index].done;
        renderTodos();
    }
    //Hàm xoá công việc
    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodos();
    }
    
    renderTodos();

