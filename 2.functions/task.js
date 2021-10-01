// Задание 1
function getArrayParams(arr) {
    
  let min,max,sum,avg;
  min = Infinity;
  max = -Infinity;
  sum = 0; 
  avg = Number((sum / arr.length).toFixed(2));

    
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
      let sum = func(arrOfArr[i]);
      if (sum > max) {
          max = func(arrOfArr[i]);
      }
      else {
          return max;
      }
  }
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
    
  for (let i = 0; i < arr.length; i++) {
      if (min > 0 && max > 0) {
          difference = max - min;
      }
      else if (min < 0 && max > 0) {
          difference = max - min;
      }
      else if (min > 0 && max < 0) {
          difference = min - max; 
      }
      else if (min < 0 && max < 0) {
         return difference = 0; 
      }
  }
}

