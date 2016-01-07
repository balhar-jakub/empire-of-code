"use strict";

var operations = {
    "conjunction": function(x, y){return x && y},
    "disjunction": function(x, y){return x || y},
    "implication": function(x, y){return !x || y},
    "exclusive": function(x, y) {return (x || y) && !(x && y)},
    "equivalence": function(x,y) {return !operations.exclusive(x, y)}
};

function boolean(x, y, operation){
    return operations[operation](x, y);
}