var a = [90, 78, 100, 45, 1009, 3, 12];

var bubbleSort = function(array){
  var sorted = true;
  while(sorted) {
    sorted = false;
    for (var i=0; i < array.length-1; i++) {
      if (array[i] > array[i+1]) {
        var swapping = array[i];
        array[i] = array[i+1];
        array[i+1] = swapping;
        sorted = true;
      }
    }
  } 
}

bubbleSort(a);
console.log(a);
