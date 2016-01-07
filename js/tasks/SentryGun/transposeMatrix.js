"use strict";

function transpose(matrix) {
    var result = [];
    for(var i = 0; i < matrix.length; i++) {
        for(var j = 0; j < matrix[i].length; j++) {
            if(!result[j]) {
                result[j] = [];
            }
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}