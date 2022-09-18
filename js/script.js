// Обновление даты дня в Header
const daysWeek = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "​​Julio",
  "Agosto",
  "Septiembre",
  "Noviembre",
  "Diciembre",
];

const headerDate = document.querySelector(".date");

const updateInterval = 300000;

document.addEventListener("DOMContentLoaded", updateDate);

function updateDate() {
  const date = new Date();
  let currentDaysWeek = daysWeek[date.getDay()];
  let currentMonths = months[date.getMonth()];
  let currentYear = date.getFullYear();
  let currentDate = date.getDate();

  headerDate.textContent = `${currentDaysWeek} ${currentDate} ${currentMonths} ${currentYear}`;
}

setInterval(updateDate, updateInterval);
// Обновление даты дня в Header

// Burger
let maxWidth = 890;
const burgerIcon = document.querySelector(".burger");
const burgerContent = document.querySelector(".burger__content");

burgerIcon.addEventListener("click", function showBurgerContent() {
  burgerContent.classList.toggle("close");
});

window.addEventListener("resize", function closeBurgerContent() {
  if (document.documentElement.clientWidth > maxWidth) {
    burgerContent.classList.add("close");
  }
});
// Burger

//Show prompt

let formInput = document.querySelectorAll('.form_input')

for (const elem of formInput) {
  elem.addEventListener('focus', function showPrompt(){
    elem.previousElementSibling.classList.remove('close')
  })
  elem.addEventListener('blur', function closePrompt(){
    elem.previousElementSibling.classList.add('close')
  })
}
//Show prompt