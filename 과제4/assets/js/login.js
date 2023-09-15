document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        alert('로그인에 성공하였습니다.');
        window.location.href = 'index.html';
    } else {
        alert('아이디나 비밀번호가 잘못되었습니다.');
    }
});
