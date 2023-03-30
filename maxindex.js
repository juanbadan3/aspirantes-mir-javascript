function maxIndex(arr) {
    if (arr.length === 0) {
      return -1;
    }
    
    let maxNum = arr[0];
    let maxIdx = 0;
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNum) {
        maxNum = arr[i];
        maxIdx = i;
      }
    }
    
    return maxIdx;
  }
  console.log(maxIndex([1, 3, 2])) // muestra 1
  console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // muestra 0
  console.log(maxIndex([])) // muestra -1  