"use strict";

function evenLast(array){
    if(array.length == 0) {
        return 0;
    }
    var sum = 0;
    for(var i = 0; i < array.length; i += 2) {
        sum += array[i];
    }
    var result = sum * array[array.length - 1];
    return result
}
