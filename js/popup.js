
// 1. Сверстать поп-ап для входа на платформу
// 1.1 Общий поп-ап, который выпадает ровно по центру
// 1.2 Добавить заголовок,  2 импута, 1 кнопка
// 1.3 Все импуты обязательны для заполнения 
// 1.4 Кнопка войти
// 2. Написать логику для показа поп-ап по нажатию "войти"

let loginButton = document.querySelector('.button');
let loginPopUp = document.querySelector('.login-popup');

console.log(loginButton);
console.log(loginPopUp);

loginButton.addEventListener('click', showPopUP)

function showPopUP(evt) {
  console.log(evt);
  evt.preventDefault();
  loginPopUp.classList.toggle('show-popup')
};