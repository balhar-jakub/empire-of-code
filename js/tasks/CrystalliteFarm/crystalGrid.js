"use strict";

function checkGrid(grid) {
    console.log(grid.length)
    for(var i = 0; i < grid.length; i++) {
        for(var j = 0; j < grid[i].length - 1; j++) {
            if(grid[i][j] == grid [i][j+1]) {
                return false;
            }
        }
    }

    var availableColumns = grid[0].length;
    for(i = 0; i < availableColumns; i++) {
        for(j = 0; j < grid.length - 1; j+= 2) {
            console.log(i + " " + j);
            if(grid[j][i] == grid[j+1][i]) {
                return false;
            }
        }
    }

    return true;
}