document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const usernameCheckEl = document.getElementById("usernameCheck");
    const passwordCheckEl = document.getElementById("passwordCheck");

    if (localStorage.getItem(username)) {
        usernameCheckEl.textContent = "이미 사용 중인 아이디입니다.";
        return;
    } else {
        usernameCheckEl.textContent = "";
    }

    const passwordRegex = /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
        passwordCheckEl.textContent = "비밀번호는 특수문자 1개 이상 포함하여 8자 이상이어야 합니다.";
        return;
    } else {
        passwordCheckEl.textContent = "";
    }

    localStorage.setItem(username, password);

    alert("회원가입이 완료되었습니다.");
    window.location.href = 'index.html';
});
