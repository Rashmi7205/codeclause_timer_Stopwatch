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
    document.getElementById('stop_watch').innerText="00 : 00 : 00"
})
