"use strict";

function clockAngle(time){
    var h = Number(time.split(":")[0]);
    var m = Number(time.split(":")[1]);
    console.log(h + " " + m);
    var hAngle = 0.5 * (h * 60 + m);
    var mAngle = 6 * m;
    var angle = Math.abs(hAngle - mAngle);
    angle = Math.min(angle, 360 - angle);
    console.log(angle);
    return Math.abs(angle);
}