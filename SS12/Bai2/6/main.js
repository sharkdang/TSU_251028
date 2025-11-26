




//Giaỉ phương trình bậc nhất
//Nếu a = 0 và b = 0: phương trình có vô số nghiệm.

//Nếu a = 0 và b <0 hoặc a=0 và b> 0: phương trình vô nghiệm.

//Nếu a <0hoạc a> 0: phương trình có nghiệm duy nhất x = -b : a



let a =parseInt(prompt("nhập số a"))
let b =parseInt(prompt("nhập số b"))
if(a==0&&b==0){
    alert("phương trình vô số nghiệm")
}else if((a==0&&b<0)||(a==0&&b>0)){
    alert("phương trình vô nghiệm")
}else{
   alert("phương trình có nghiệm duy nhất là "+(-b/a))
}
