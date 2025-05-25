document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const errorMsg = document.getElementById('errorMsg');
    const loginBtn = document.getElementById('loginBtn');

    function validate() {
        if (!username.value.trim() || !password.value.trim()) {
            loginBtn.disabled = true;
            return false;
        }
        loginBtn.disabled = false;
        return true;
    }

    username.addEventListener('input', validate);
    password.addEventListener('input', validate);

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!validate()) {
            errorMsg.textContent = '请输入用户名和密码';
            return;
        }
        errorMsg.textContent = '';
        // 这里可以添加实际的登录逻辑
        alert('登录成功！');
        form.reset();
        validate();
    });

    // 初始化按钮状态
    validate();
}); 