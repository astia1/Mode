function mode(array) {
  array.sort((function(a, b){return a - b}));
  let modeArray = []
  modeArray.push(array[0]);  
  for ( let i = 0, x = 0 ; i < array.length ; i += 1 ) {
  if (modeArray[0] == array[i]) { 
  modeArray.splice(x,1,array[i]);
  x++
  }
  else { 
  modeArray.splice(0,1,array[i]);

  modeArray [x = 1];

     }

  }
  console.log(modeArray)
  return [modeArray.pop()]
}

function modeTests() {
  console.log(mode([1,2,2,1,1,3, 7, 3]), ' -> 1');
  console.log(mode([1]), '1');
  console.log(mode([2, 2, 2, 3, 3, 3,3,9,9,9,4,4,4]), ' -> 3');
}

modeTests() // uncomment to test!
