document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.button');
    const ceButton = document.querySelector('.ce');
    const showHistoryButton = document.querySelector('.show-history');
    let history = [];

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === '=') {
                try {
                    const result = eval(display.value);
                    history.push(`${display.value} = ${result}`);
                    display.value = result;
                } catch (e) {
                    display.value = "Error";
                }
            } else if (this.textContent === 'CE') {
                display.value = '';
            } else if (this.textContent !== '기록 보기') {
                display.value += this.textContent;
            }
        });
    });

    showHistoryButton.addEventListener('click', function() {
        alert(history.join('\n'));
    });
});
