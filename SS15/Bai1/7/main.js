
//Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử. 
// Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.

let arr = [];

for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
  arr.push(num);
}

for(let i=0;i<arr.length;i++) {
	for(let j=i+1;j<arr.length;j++) {
		if(arr[i]<arr[j]) {
			let t=arr[i];
			arr[i]=arr[j];
			arr[j]=t;
		}
	}		
	
}
alert("Mảng được sắp xếp theo thứ tự giảm dần là:"+arr);