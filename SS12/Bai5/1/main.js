









let f1 = 0, f2 = 1;
for (let i = 1; i <= 15; i++) {
    console.log(f1);
    let next = f1 + f2;
    f1 = f2;
    f2 = next;
}
