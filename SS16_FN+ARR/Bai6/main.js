




  function sumArr(arr) {
    return arr.reduce((total, num) => total + num, 0);
  }

  const arr1 = [1, 2, 3, 4, 5, 6];     
  const arr2 = [10, 20, 30, 40, 50];
  const arr3 = [1, 3, 5, 7, 9];

  console.log(sumArr(arr1));   // 21
  console.log(sumArr(arr2));   // 150
  console.log(sumArr(arr3));   //  25
