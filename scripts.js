// Получаем элементы, с которыми будем работать
const dolphinContainer = document.querySelector(".dolphin-container");
const dolphin = document.querySelector(".dolphin");

// Вычисляем высоту моря и высоту дельфина
const oceanHeight = document.querySelector(".ocean").clientHeight;
const dolphinHeight = dolphin.clientHeight;

// Функция для анимации прыжка дельфина
function jump() {
  const jumpHeight = 150; // Высота прыжка дельфина
  const jumpDuration = 1000; // Продолжительность прыжка в миллисекундах

  dolphin.style.transition = `bottom ${jumpDuration}ms ease-out`;
  dolphin.style.bottom = `${oceanHeight - jumpHeight - dolphinHeight}px`;

  setTimeout(function() {
    dolphin.style.transition = `bottom ${jumpDuration}ms ease-in`;
    dolphin.style.bottom = `${oceanHeight - dolphinHeight}px`;
  }, jumpDuration);
}

// Запускаем анимацию через определенные интервалы
setInterval(jump, 3000); // Здесь 3000 миллисекунд (3 секунды) - интервал между прыжками дельфина
