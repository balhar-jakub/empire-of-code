"use strict";

function countUnits(number) {
    var binaryNumber = Number(number).toString(2);
    var amount = 0;
    [].forEach.call(binaryNumber, function(num){
        amount += Number(num);
    });
    return amount;
}