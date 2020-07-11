var min = 00;
var sec = 00;
var milli = 00;
var minSpan = document.getElementById("min")
var secSpan = document.getElementById("sec")
var milliSpan = document.getElementById("milli")
var laps = document.getElementById("laps")
var interval;

function timer(){
    milli++;
    milliSpan.innerHTML = milli;
    if(milli >= 99){
        sec++
        if (sec < 10){
        secSpan.innerHTML = "0" + sec;}
        else {
            secSpan.innerHTML = sec;
        }
        milli = 0;
    }

    else if(sec >= 59){
        min++
        if (min < 10){
            secSpan.innerHTML = "0" + sec;}
            else {
                secSpan.innerHTML = sec;
            }
        sec = 0;
    }
}

function start(){
    interval = setInterval(timer,10)
    document.getElementById("start").disabled = true;
}

function stop(){
    clearInterval(interval)
}



function lap(){
    laps.innerHTML = "<li><input value = 'lap #' > " + min + " : " + sec + " : " + milli  + "</li>"
}

function reset(){
    stop()
    milliSpan.innerHTML = "00";
    secSpan.innerHTML = "00";
    minSpan.innerHTML = "00";
    laps.innerHTML = ' '
}

function fontsize(){

}