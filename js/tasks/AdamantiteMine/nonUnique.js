"use strict";

function nonUnique(data) {
    var filtered = [];
    for(var i = 0; i < data.length; i++) {
        if(amountInArray(data, data[i]) > 1){
            filtered.push(data[i]);
        }
    }
    return filtered;
}

function amountInArray(arr, elm){
    var amount = 0;
    for(var i = 0; i < arr.length; i++) {
        var toCompare1 = elm;
        var toCompare2 = arr[i];
        if(typeof elm === 'string') {
            toCompare1 = elm.toLowerCase();
        }
        if(typeof arr[i] === 'string') {
            toCompare2 = arr[i].toLowerCase();
        }
        if(toCompare1 == toCompare2) {
            amount++;
        }
    }
    return amount;
}