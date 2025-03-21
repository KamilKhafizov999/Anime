document.getElementById("reg_form").onsubmit = function (event) {
    var isValid = true;

    // Сброс ошибок
    document.getElementById("regEmailError").style.display = "none";
    document.getElementById("regPasswordError").style.display = "none";
    document.getElementById("confirmRegPasswordError").style.display = "none";

    // Получение значений полей
    var email = document.getElementById("regEmail").value.trim();
    var password = document.getElementById("regPassword").value.trim();
    var confirmPassword = document.getElementById("confirmRegPassword").value.trim();

    // Валидация email
    var emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById("regEmailError").textContent = "Введите корректный адрес электронной почты.";
        document.getElementById("regEmailError").style.display = "block";
    }

    // Валидация пароля
    if (password.length < 6) {
        isValid = false;
        document.getElementById("regPasswordError").textContent = "Пароль должен содержать не менее 6 символов.";
        document.getElementById("regPasswordError").style.display = "block";
    }

    // Валидация подтверждения пароля
    if (password !== confirmPassword) {
        isValid = false;
        document.getElementById("confirmRegPasswordError").textContent = "Пароли не совпадают.";
        document.getElementById("confirmRegPasswordError").style.display = "block";
    }

    // Если форма не валидна, предотвращаем отправку
    if (!isValid) {
        event.preventDefault();
    }
};

document.getElementById("loginForm").onsubmit = function (event) {
    var isValid = true;

    // Сброс ошибок
    document.getElementById("loginEmailError").style.display = "none";
    document.getElementById("loginPasswordError").style.display = "none";

    // Получение значений полей
    var email = document.getElementById("loginEmail").value.trim();
    var password = document.getElementById("loginPassword").value.trim();

    // Валидация email
    var emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById("loginEmailError").textContent = "Введите корректный адрес электронной почты.";
        document.getElementById("loginEmailError").style.display = "block";
    }

    // Валидация пароля
    if (password.length < 6) {
        isValid = false;
        document.getElementById("loginPasswordError").textContent = "Пароль должен содержать не менее 6 символов.";
        document.getElementById("loginPasswordError").style.display = "block";
    }

    // Если форма не валидна, предотвращаем отправку
    if (!isValid) {
        event.preventDefault();
    }
};

document.getElementById("resetPasswordForm").onsubmit = function (event) {
    var isValid = true;

    // Сброс ошибок
    document.getElementById("resetEmailError").style.display = "none";
    document.getElementById("resetPasswordError").style.display = "none";
    document.getElementById("confirmResetPasswordError").style.display = "none";

    // Получение значений полей
    var email = document.getElementById("resetEmail").value.trim();
    var password = document.getElementById("resetPassword").value.trim();
    var confirmPassword = document.getElementById("confirmResetPassword").value.trim();

    // Валидация email
    var emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById("resetEmailError").textContent = "Введите корректный адрес электронной почты.";
        document.getElementById("resetEmailError").style.display = "block";
    }

    // Валидация пароля
    if (password.length < 6) {
        isValid = false;
        document.getElementById("resetPasswordError").textContent = "Пароль должен содержать не менее 6 символов.";
        document.getElementById("resetPasswordError").style.display = "block";
    }

    // Валидация подтверждения пароля
    if (password !== confirmPassword) {
        isValid = false;
        document.getElementById("confirmResetPasswordError").textContent = "Пароли не совпадают.";
        document.getElementById("confirmResetPasswordError").style.display = "block";
    }

    // Если форма не валидна, предотвращаем отправку
    if (!isValid) {
        event.preventDefault();
    }
};

document.getElementById("forgotPasswordForm").onsubmit = function (event) {
    var isValid = true;

    // Сброс ошибок
    document.getElementById("forgotEmailError").style.display = "none";

    // Получение значений полей
    var email = document.getElementById("forgotEmail").value.trim();

    // Валидация email
    var emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById("forgotEmailError").textContent = "Введите корректный адрес электронной почты.";
        document.getElementById("forgotEmailError").style.display = "block";
    }

    // Если форма не валидна, предотвращаем отправку
    if (!isValid) {
        event.preventDefault();
    }
};