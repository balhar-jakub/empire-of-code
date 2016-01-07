"use strict";

function indexPower(array, n) {
    if(array.length <= n) {
        return -1;
    }
    return Math.pow(array[n], n);
}