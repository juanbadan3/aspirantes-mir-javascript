function join(arr) {
    let result = "";
    
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
      
      if (i < arr.length - 1) {
        result += " ";
      }
    }
    
    return result;
  }
  