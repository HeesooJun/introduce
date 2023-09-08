let batteryLevel = 100;
const clockEl = document.getElementById("clock");
const alarmsListEl = document.getElementById("alarms-list");
let alarms = [];

function updateBattery() {
    batteryLevel -= 1;
    const batteryDiv = document.querySelector(".battery-level");
    batteryDiv.style.width = batteryLevel + "%";

    if (batteryLevel === 0) {
        clockEl.style.backgroundColor = "black";
        clearInterval(batteryInterval);
    }
}

function addAlarm() {
    if (alarms.length < 3) {
        const hour = document.getElementById("hour").value;
        const minute = document.getElementById("minute").value;
        const second = document.getElementById("second").value;
        alarms.push(`${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:${second.padStart(2, "0")}`);
        displayAlarms();
    } else {
        alert("Max 3 alarms allowed!");
    }
}

function displayAlarms() {
    alarmsListEl.innerHTML = '';
    alarms.forEach(alarm => {
        const li = document.createElement("li");
        li.textContent = alarm;
        alarmsListEl.appendChild(li);
    });
}

function updateTime() {
    const now = new Date();
    const timeString = now.getHours().toString().padStart(2, '0') + ':' +
        now.getMinutes().toString().padStart(2, '0') + ':' +
        now.getSeconds().toString().padStart(2, '0');
    clockEl.textContent = timeString;

    if (alarms.includes(timeString)) {
        alert("ALARM!");
    }
}

const batteryInterval = setInterval(updateBattery, 1000);
setInterval(updateTime, 1000);
