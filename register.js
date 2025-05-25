document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registerForm');
    const username = document.getElementById('reg-username');
    const password = document.getElementById('reg-password');
    const confirm = document.getElementById('reg-confirm');
    const errorMsg = document.getElementById('regErrorMsg');
    const registerBtn = document.getElementById('registerBtn');

    function validate() {
        if (!username.value.trim() || !password.value.trim() || !confirm.value.trim()) {
            registerBtn.disabled = true;
            return false;
        }
        registerBtn.disabled = false;
        return true;
    }

    function showError(msg) {
        errorMsg.textContent = msg;
    }

    username.addEventListener('input', validate);
    password.addEventListener('input', validate);
    confirm.addEventListener('input', validate);

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!validate()) {
            showError('请填写所有字段');
            return;
        }
        if (password.value.length < 6) {
            showError('密码长度不能少于6位');
            return;
        }
        if (password.value !== confirm.value) {
            showError('两次输入的密码不一致');
            return;
        }
        showError('');
        // 模拟注册成功，跳转到登录页
        alert('注册成功，请登录！');
        window.location.href = 'index.html';
    });

    // 初始化按钮状态
    validate();
}); 