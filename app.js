var min = 0;
var sec = 0;
var msec = 0;

var minute = document.getElementById("min");
var seconds = document.getElementById("sec");
var miliSecond = document.getElementById("msec");


var interval;

function timer() {
    msec++;
    miliSecond.innerHTML = msec;

    if (msec >= 100) {
        sec++;
        seconds.innerHTML = sec;
        msec = 0;
    }
    else if (sec >= 60) {
        min++;
        minute.innerHTML = min;
        sec = 0;
    }
  
}


function start() {
    interval = setInterval(timer, 10);
}

function stop() {
    clearInterval(interval)

    document.getElementById("start").disabled = false;
}

function reset() {
    min = 0;
    sec = 0;
    msec = 0
    minute.innerHTML = min;
    seconds.innerHTML = sec;
    miliSecond.innerHTML = msec;
    clearInterval(interval)

    document.getElementById("start").disabled = false;
}