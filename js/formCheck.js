// Получаем форму
const form = document.querySelector('.login-form');

// Добавляем обработчик события на отправку формы
form.addEventListener('submit', function(event) {
    // Получаем значения полей ввода логина и пароля
    const login = document.querySelector('#id_login').value;
    const password = document.querySelector('#id_password').value;

    // Проверяем, заполнены ли поля
    if (!login || !password) {
        // Если поля не заполнены, отменяем отправку формы
        event.preventDefault();
        // Выводим сообщение об ошибке
        alert('Пожалуйста, заполните все поля');
    }
});