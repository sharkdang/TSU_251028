



//     giải phương trình bậc 2
// del = b^2-4*a*c
// del=0 phương trình có nghiệm kép -b/2a
// del <0 phương trình vô nghiệm
// del>0 phương trình có 2 nghiệm phân biệt
// x1 = -b+can(del)/2a  x2= -b-can(del)/2a

let a = parseInt(prompt("nhập số a"));
let b = parseInt(prompt("nhập số b"));
let c = parseInt(prompt("nhập số c"));
let del = b * b - 4 * a * c;
let x1 = (-b + Math.sqrt(del)) / (2 * a);
let x2 = (-b - Math.sqrt(del)) / (2 * a);

if (del == 0) {
  alert("phương trình có nghiệm kép là " + (-b / 2) * a);
} else if (del < 0) {
  alert("phương trình vô nghiệm");
} else {
  alert("phương trình có 2 nghiệm phân biệt " + x1 + " " + x2);
}
