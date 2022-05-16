const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById("btn-start");
const stop_btn = document.getElementById("btn-stop");
const cancel_btn = document.getElementById("btn-cancel");
const messageW = document.getElementById("workoutMessage");
const workoutContainer = document.getElementById("workout");

const inputText = document.querySelector('#txt');
const listButton = document.querySelector('.btn-list');
const list = document.querySelector('.containerW ul');

let hour = new Date().getHours();
let seconds = 0;
let interval = null;


start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
cancel_btn.addEventListener('click', cancel);


listButton.addEventListener('click', (e) => {
    if (inputText.value != "") {
        e.preventDefault();
        const myli = document.createElement('li');
        myli.innerHTML = inputText.value;
        list.appendChild(myli);

        const mySpan = document.createElement('span');
        mySpan.innerHTML = 'x';
        myli.appendChild(mySpan);
    }
    const close = document.querySelectorAll('span');
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', () => {
            close[i].parentElement.style.opacity = 0;
        })
    }
    inputText.value = "";
    
});

function timer() {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs*3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) {
        secs = '0' + secs;
    }
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (hrs < 10) {
        hrs = '0' + hrs;
    }
    

    time_el.innerText = `${hrs}:${mins}:${secs}`;

}

function start() {
    if (interval) {
        return
    }
    stop_btn.style.visibility = 'visible';
    cancel_btn.style.visibility = 'visible';
    workoutContainer.style.visibility = 'visible';
    interval = setInterval(timer, 1000);

    toggleMessage() 
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function cancel() {
    stop();
    seconds = 0;
    time_el.innerText = '00:00:00';

    messageW.innerText = "Start New Workout";
    stop_btn.style.visibility = 'hidden';
    cancel_btn.style.visibility = 'hidden';
    workoutContainer.style.visibility = 'hidden';
}

function toggleMessage() {
    if (hour > 6 && hour < 12) {
        messageW.innerText = 'Morning Workout';
    } else if (hour => 12 && hour <= 18) {
        messageW.innerText = 'Midday Workout';
    } else {
        messageW.innerText = 'Night Workout';
    }
}

