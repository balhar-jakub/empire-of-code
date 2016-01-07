"use strict";

function checkLine(line) {
    for(var i = 0; i < (line.length - 1); i++) {
        if(line[i] == line[i + 1]) {
            return false;
        }
    }
    return true;
}