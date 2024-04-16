const startRef = document.getElementById("btnStart");
const stopRef = document.getElementById("btnStop");
const resetRef = document.getElementById("btnReset");
const minuteRef = document.getElementById("minute");
const secondRef = document.getElementById("second");
const tensRef = document.getElementById("tens");
var minutes = 0;
var seconds = 0;
var tens = 0;
var clockRunning = false;
    setInterval(count, 10);
    function count(){
        if (clockRunning == true){
            tens++;
            if (tens < 10){
                tensRef.innerHTML = "0" + tens;
            }
            else if (tens > 99){
                seconds++;
                if (seconds < 10){
                    secondRef.innerHTML = "0" + seconds;
                }
                else if (seconds > 59){
                    minutes++
                    if (minutes < 10){
                        minuteRef.innerHTML = "0" + minutes;
                    }
                    else{
                        minuteRef.innerHTML = minutes;
                    }
                    seconds = 0;
                    secondRef.innerHTML = "0" + seconds;
                }
                else{
                    secondRef.innerHTML = seconds;
                }
                tens = 0;
                tensRef.innerHTML = "0" + tens;
            } 
            else{
                tensRef.innerHTML = tens;
            }
        }
    }
    startRef.addEventListener("click", function(){
        clockRunning = true;
    });
    stopRef.addEventListener("click", function(){
        clockRunning = false;
    });
    resetRef.addEventListener("click", function(){
        minutes = 0;
        seconds = 0;
        tens = 0;
        minuteRef.innerHTML = "0" + minutes;
        secondRef.innerHTML = "0" + seconds;
        tensRef.innerHTML = "0" + tens;
    });