"use strict";

function convert(strNumber, radix) {
    if(!checkForValidity(strNumber, radix)) {
        return -1;
    }
    return parseInt(strNumber, radix);
}

function checkForValidity(strNumber, radix) {
    var valid = true;
    [].forEach.call(strNumber, function(num){
        if(getValueOfNumber(num) >= radix) {
            valid = false;
        }
    });
    return valid;
}

function getValueOfNumber(num) {
    var code = num.charCodeAt(0);
    if(code >= 65) {
        return code - 65 + 10;
    } else {
        return num;
    }
}