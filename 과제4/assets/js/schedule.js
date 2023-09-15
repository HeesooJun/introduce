const calendarDiv = document.getElementById("calendar");
const scheduleList = document.getElementById("scheduleList");
const selectedDateTitle = document.getElementById("selectedDateTitle");
let schedules = {};  // 일정을 저장하는 객체 

document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    displaySchedules(today);
    document.getElementById("scheduleDate").valueAsDate = today;
});

function addSchedule() {
    const dateInput = document.getElementById('scheduleDate').value;
    const scheduleInput = document.getElementById('newSchedule');
    const scheduleValue = scheduleInput.value.trim();

    if (scheduleValue === "") {
        alert("일정을 입력하세요!");
        return;
    }

    if (!schedules[dateInput]) {
        schedules[dateInput] = [];
    }
    schedules[dateInput].push(scheduleValue);
    scheduleInput.value = "";

    const addedDate = new Date(dateInput);
    if (addedDate.getFullYear() === currentYear && addedDate.getMonth() === currentMonth) {
        // 해당 년/월이 현재 달력과 일치하면 달력 업데이트
        renderCalendar();
    }

    displaySchedules(addedDate);
}

function displaySchedules(date) {
    const dateString = date.toISOString().split('T')[0];
    selectedDateTitle.textContent = dateString;

    const dailySchedules = schedules[dateString] || [];
    scheduleList.innerHTML = "";
    
    dailySchedules.forEach((schedule, idx) => {
        const listItem = document.createElement('li');
        listItem.textContent = schedule;
        listItem.innerHTML += ` <br><span onclick="deleteSchedule('${dateString}', ${idx})" class="py-1 text-red-500 cursor-pointer">삭제</span></br>`;
        scheduleList.appendChild(listItem);
    });

    // 모든 달력 셀의 배경색 초기화
    const cells = document.querySelectorAll('#calendar td');
    cells.forEach(cell => cell.classList.remove('bg-yellow-200'));

    // 일정이 있는 날짜를 표시
    for (let date in schedules) {
        if (schedules[date].length) {
            markDateOnCalendar(date);
        }
    }
}


function deleteSchedule(dateString, index) {
    if (schedules[dateString]) {
        schedules[dateString].splice(index, 1);
    }

    displaySchedules(new Date(dateString));
}

function onChangeDate() {
    const selectedDate = new Date(document.getElementById('scheduleDate').value);
    displaySchedules(selectedDate);
}


function markDateOnCalendar(dateString) {
    const cell = document.querySelector(`#calendar td[data-date="${dateString}"]`);
    if (cell) {
        cell.classList.add('bg-yellow-200');
    }
}
