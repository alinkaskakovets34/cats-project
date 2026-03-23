// 1. Отримуємо посилання на елементи DOM
const passwordDisplay = document.getElementById('password-display');
const lengthSlider = document.getElementById('length-slider');
const lengthValue = document.getElementById('length-value');
const generateBtn = document.getElementById('generate-btn');

// 2. Оновлення цифри довжини при русі повзунка
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

// 3. Функція генерації
function generatePassword() {
    const length = lengthSlider.value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < length; i++) {
        // Вибираємо випадковий індекс із рядка charset
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordDisplay.value = password;
}

// 4. Слухаємо клік на кнопку
generateBtn.addEventListener('click', generatePassword);

// Генеруємо пароль відразу при завантаженні
generatePassword();