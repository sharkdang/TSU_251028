



let btnToggle = document.querySelector('.btnToggle');
// lấy nút btnToggle (bật / tắt)
// Có thì sẽ xóa,kh có thì thêm vào
btnToggle.onclick = function(){
  document.body.classList.toggle('dark-mode');
}