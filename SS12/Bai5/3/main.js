// Hình 1

for (let i = 1; i <= 5; i++) {//1
    let line = "";
  for (let j = 1; j <= i; j++) {//1
     line += "*";
  }
    console.log(line);
}

// hình 2
for (let i = 5; i >0; i--) {//1
    let line = "";
  for (let j = 1; j <= i; j++) {//1
     line += "*";
  }
    console.log(line);
}

//hình 3


for (let i = 1; i <= 5; i++) {//1
    let line = "";
  for (let j = 1; j <= 5-i; j++) {//1
     line += " ";
  }
  for (let k = 1; k <= i; k++) {
        line += "*";
    }
    console.log(line);
}
//hình 4
for (let i = 5; i >= 1; i--) {
    let line = "";

    for (let j = 1; j <= 5 - i; j++) {
        line += " ";
    }

    for (let k = 1; k <= i; k++) {
        line += "*";
    }

    console.log(line);
}
