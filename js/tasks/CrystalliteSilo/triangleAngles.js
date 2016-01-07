"use strict";

function angles(a, b, c){
    if(a + b <= c || a + c <= b || b + c <= a) {
        return [0, 0, 0];
    }

    var alfa = (b * b + c * c - a * a) / (2 * b * c);
    alfa = Math.round(Math.acos(alfa) * (180 / Math.PI));
    var beta = (a * a + c * c - b * b) / (2 * a * c);
    beta = Math.round(Math.acos(beta) * (180 / Math.PI));
    var gama = (b * b + a * a - c * c) / (2 * b * a);
    gama = Math.round(Math.acos(gama) * (180 / Math.PI));
    console.log(alfa, beta, gama);
    return [alfa, beta, gama].sort(function(a, b){return a - b});
}