var a = [90, 78, 100, 45, 1009, 3, 12];

var insertionSort = function(array) {
  var length = array.length
  for (var i=1; i < length; ++i) {
    var temp = array[i]
    var counter = i - 1
    for(;counter >= 0 && array[counter] > temp; --counter) {
      array[counter+1] = array[counter];
    }
    array[counter+1] = temp;
  }
}


insertionSort(a)
console.log(a)
