"use strict";

function median(data) {
    var sorted = data.sort(function(a, b){return a-b});
    if(data.length % 2 == 0) {
        return (sorted[data.length/2 - 1] + sorted[data.length/2]) / 2;
    } else {
        return sorted[Math.floor(data.length / 2)];
    }
}