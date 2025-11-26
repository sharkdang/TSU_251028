


let a = parseInt(prompt('Nhập điểm thi giữa kì'));

let b = parseInt(prompt('Nhập điểm thi cuối kì'));

let dtb=(a+b)/2;

if(dtb<5){
    alert('Học lực yếu')
}else if((dtb>=5)&&(dtb<7)){
    alert('Học lực trung bình')
}else if((dtb>=7)&&(dtb<8)){
    alert('Học lực khá')
}else if((dtb>=8)&&(dtb<9)){
    alert('Học lực giỏi')
}else {
    alert('Học lực xuất sắc')
}