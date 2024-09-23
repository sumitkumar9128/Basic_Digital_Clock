const bt = document.getElementById('btn');
let timerRunning = true;
let intervalId = setInterval(showTime, 1000); 


function showTime() {
    const currentTime = new Date();
    const time = `${formatTime(currentTime.getHours())}:${formatTime(currentTime.getMinutes())}:${formatTime(currentTime.getSeconds())}`;
    document.getElementById('time').innerHTML = time;
}


function showDate() {
    const currentDate = new Date();
    const formattedDate = `${formatTime(currentDate.getDate())}-${formatTime(currentDate.getMonth() + 1)}-${currentDate.getFullYear()}`;
    document.getElementById('date').innerHTML = formattedDate;
}


function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}


bt.addEventListener('click', () => {
    if (timerRunning) {
        clearInterval(intervalId); 
        bt.innerHTML = "Resume Timer";
        timerRunning = false;
    } else {
        intervalId = setInterval(showTime, 1000); 
        bt.innerHTML = "Stop Timer";
        timerRunning = true;
    }
});


showDate(); 
showTime(); 

