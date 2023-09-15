let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

function renderCalendar(year = currentYear, month = currentMonth) {
    const firstDay = new Date(year, month, 1).getDay(); 
    const daysInMonth = new Date(year, month + 1, 0).getDate(); 

    let html = '<table class="border w-full"><thead><tr>';
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    for (let d of days) {
        html += `<th class="border p-3">${d}</th>`;
    }
    html += '</tr></thead><tbody><tr>';

    // 첫 날이 시작하기 전의 빈 칸을 채움
    for (let i = 0; i < firstDay; i++) {
        html += '<td class="border p-2"></td>';
    }

    for (let i = 1; i <= daysInMonth; i++) {
        if ((i + firstDay - 1) % 7 === 0 && i !== 1) {
            html += '</tr><tr>';
        }
    
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        const schedulesForDay = JSON.parse(localStorage.getItem(dateString) || "[]");
        const hasSchedule = schedulesForDay.length > 0;
        html += `<td data-date="${dateString}" class="border p-4 ${hasSchedule ? 'bg-yellow-200' : ''}">${i}</td>`;
    }

    html += '</tr></tbody></table>';

    document.getElementById('calendar').innerHTML = html;

    document.getElementById('calendarTitle').textContent = `${year}.${month + 1}`;
}

function goToNextMonth() {
    if (currentMonth === 11) {
        currentYear++;
        currentMonth = 0;
    } else {
        currentMonth++;
    }
    renderCalendar();
}

function goToPrevMonth() {
    if (currentMonth === 0) {
        currentYear--;
        currentMonth = 11;
    } else {
        currentMonth--;
    }
    renderCalendar();
}

renderCalendar();
