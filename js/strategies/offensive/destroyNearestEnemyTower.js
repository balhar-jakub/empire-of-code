"use strict";
var Client = require("battle/commander.js").Client;
var client = new Client();

function attackNext() {
    if(!attackNearestEnemyTower()) {
        attackCenter();
    }
}

function attackNearestEnemyTower() {
    var enemy = null;
    var me = client.askMyInfo();
    var towers = client.askTowers();
    var minDistance = Number.MAX_VALUE;
    towers.forEach(function(tower){
        var x1 = tower.coordinates[0];
        var y1 = tower.coordinates[1];

        var x2 = me.coordinates[0];
        var y2 = me.coordinates[1];

        var xs = x2 - x1;
        xs *= xs;
        var ys = y2 - y1;
        ys *= ys;

        var distance = Math.sqrt(xs + ys);
        if(distance < minDistance) {
            minDistance = distance;
            enemy = tower;
        }
    });
    if(enemy) {
        client.doAttack(enemy.id);
        client.whenItemDestroyed(enemy.id).then(attackNext);
    }
    return enemy;
}

function attackCenter() {
    var enemy = client.askCenter();
    client.doAttack(enemy.id);
    client.whenItemDestroyed(enemy.id).then(attackNext);
}

attackNext();
