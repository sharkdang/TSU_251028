




let dai = 8;

let rong = 10;


for (let i = 1; i <= dai; i++) {
  let line = "";
  for (let j = 1; j <= rong; j++) {
    if (i === 1 || i === dai || j === 1 || j === rong) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
