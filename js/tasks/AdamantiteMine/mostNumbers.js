"use strict";

function mostDifference() {
    var allArguments = arguments;
    if(allArguments.length == 0 ) {
        return 0;
    }

    var max = null;
    var min = null;
    for(var i = 0; i < arguments.length; i++) {
        if(max == null || max < arguments[i]) {
            max = arguments[i];
        }
        if(min == null || min > arguments[i]) {
            min = arguments[i];
        }
    }

    return Number(max - min);
}