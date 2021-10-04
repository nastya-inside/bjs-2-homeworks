// Задание 1
function getArrayParams(arr) {
    
  let min,max,sum,avg;
  min = Infinity;
  max = -Infinity;
  sum = 0; 
    
    for (let i = 0; i < arr.length; i++) {
        
    let len = arr.length;
        
      if (arr[i] < min) {
      min = arr[i];
    }
      else if (arr[i] > max) {
      max = arr[i];
    }
        
    sum += arr[i];
    }
    
    avg = Number((sum / arr.length).toFixed(2));


  return { min:min, max:max, avg:avg };
}


// Задание 2

function worker(arr) {
  let sum;
  for (let i = 0; i < arr.length; i++) {
   sum += arr[i];
 }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  for (let i = 0; i < arrOfArr.length; i++) {
      let result = func(arrOfArr[i]);
      if (result > max) {
          max = result;
      }
  }
       return max;
}


// Задание 3
function worker2(arr) {
 let difference = 0; 
  min = Infinity;
  max = -Infinity;
    

  for (let i = 0; i < arr.length; i++) {    
     if (arr[i] < min) {
      min = arr[i];
    }
      else if (arr[i] > max) {
      max = arr[i];
    }
}
    
    difference = Math.abs(max - min);
    
    return difference; 
    
}

