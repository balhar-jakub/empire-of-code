"use strict";

function flatList(array) {
    var orderedElements = array.join(",").split(",");
    return orderedElements.map(function(elm){
        if(elm == "") {
            return null;
        }
        return Number(elm);
    }).filter(function(elm){
        return elm != null;
    });
}