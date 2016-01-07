"use strict";

function countInversion(sequence) {
    var inversions = 0;

    // Inversion happens when any number has lower numbers behind it.
    for(var i = 0; i < sequence.length; i++) {
        for(var j = i; j < sequence.length; j++) {
            if(sequence[i] > sequence[j]) {
                inversions++;
            }
        }
    }

    return inversions;
}