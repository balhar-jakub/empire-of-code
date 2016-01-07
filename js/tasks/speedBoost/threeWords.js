"use strict";
function threeWords(words) {
    var successionWords = 0;
    return words.split(" ").some(function(word){
        if(!Number(word)) {
            successionWords++;
            if(successionWords >= 3) {
                return true;
            }
        } else {
            successionWords = 0;
        }
    });
}