"use strict";

function findMessage(text){
    var result = "";
    [].forEach.call(text, function(char){
        if(char.toUpperCase() == char && char.match(/[a-z]/i)) {
            result += char;
        }
    });
    return result;
}