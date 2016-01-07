"use strict";

function countIngots(report) {
    var ingots = report.split(",");
    var sum = 0;
    ingots.forEach(function(amount){
        sum += translateAmount(amount);
    });
    return sum;
}

function translateAmount(amount){
    return (9 * (amount.charCodeAt(0) - 65)) + Number(amount[1]);
}