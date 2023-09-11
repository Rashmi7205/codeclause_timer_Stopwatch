document.getElementById('timer_btn').addEventListener('click',()=>{
    
});


document.getElementById('stopwatch_btn').addEventListener('click',()=>{

});

let interval ;
let time = 0;

const updateTime = ()=>{
    const display = document.getElementById('stop_watch');
    time++;
    const hrs = (time/3600)>1?(time/3600).toFixed(0):"00"
    const min = (time/60)>1?((time/60)%60).toFixed(0):"00";

    display.innerText =`${hrs}:${min}:${time%60}`;
}
document.getElementById('start').addEventListener('click',()=>{
    interval = setInterval(updateTime,1000);
});

document.getElementById('lap').addEventListener('click',()=>{
    clearInterval(interval);
});

document.getElementById('reset').addEventListener('click',()=>{
    clearInterval(interval);
    time=0;
    document.getElementById('stop_watch').innerText="00 : 00 : 00";
})



// Code for the timer Section

let timer_time=0;
let timerInterval ;
// Set timer
document.getElementById('set_timer').addEventListener('click',()=>{
    const setTime = document.getElementById('set_time');
    setTime.style.top='100px';
    setTime.style.left='25%';
});

document.getElementById('settime').addEventListener('click',()=>{
    const setTime = document.getElementById('set_time');
    setTime.style.top='-100%';
    setTime.style.left='25%';
   
    const hrs = document.getElementById('timer_hrs').value;
    const min = document.getElementById('timer_min').value;
    const sec = document.getElementById('timer_sec').value;

    timer_time =(hrs*3600)+(min*60)+sec;
 
    timerInterval = setInterval(updateTimer,1000);
});



const updateTimer = ()=>{
    const display = document.getElementById('timer_watch');
    if(timer_time==0){
        clearInterval(timerInterval);
        timer_time=0;
        return;
    }
    timer_time--;
    const hrs = ( timer_time/3600)>1?(timer_time/3600).toFixed(0):"00"
    const min = (timer_time/60)>1?((timer_time/60)%60).toFixed(0):"00";

    display.innerText =`${hrs}:${min}:${timer_time%60}`;
}


// Toggling the display

document.getElementById('stopwatch_btn').addEventListener('click',()=>{
    const timerDisplay = document.getElementById('timer_display');
    timerDisplay.classList.add('hidden');
    const stopWatchDisplay = document.getElementById('stop_watch_display');
    stopWatchDisplay.classList.remove('hidden');
});

document.getElementById('timer_btn').addEventListener('click',()=>{
    const timerDisplay = document.getElementById('timer_display');
    timerDisplay.classList.remove('hidden');
    const stopWatchDisplay = document.getElementById('stop_watch_display');
    stopWatchDisplay.classList.add('hidden');

});

document.getElementById('timer_reset').addEventListener('click',()=>{
    if(timerInterval){
        clearInterval(timerInterval);
        document.getElementById('timer_watch').innerText="00:00:00";
    }
});