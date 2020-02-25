
function check_array(array) {
  if ( Array.isArray(array) == false || array.length == '0' ) {
    return 0;
  }
}

exports.min = function min (array) {
  
  if (check_array(array) == 0) {
    return 0;
  }

  let min = array[0];
  let size = array.length;

    for ( let count = 1; count <= size; count++ ) {
      if( array[count] < min ) {
        min = array[count];
      }
    }
  return min;
}

exports.max = function max (array) {
  if (check_array(array) == 0) {
    return 0;
  }

  let max = array[0];
  let size = array.length;

    for ( let count = 1; count <= size; count++ ) {
      if( array[count] > max ) {
        max = array[count];
      }
    }
  return max;
}

exports.avg = function avg (array) {
  if (check_array(array) == 0) {
    return 0;
  }

  let size = array.length;
  let array_sum = 0;
  let array_avg;

  for ( let count = 0; count < size; count++ ) {
    array_sum += array[count];
  }

  array_avg = array_sum / size;

  return array_avg;
}
