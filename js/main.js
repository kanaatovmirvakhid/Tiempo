// Обновление даты дня в Header
const daysWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', '​​Julio', 'Agosto', 'Septiembre', 'Noviembre', 'Diciembre']

const headerDate = document.querySelector('.date')

function updateDate(){
    let currentDaysWeek = daysWeek[new Date().getDay()]
    let currentMonths = months[new Date().getMonth()]
    let currentYear = new Date().getFullYear()
    let currentDate =  new Date().getDate()

    headerDate.textContent = `${currentDaysWeek} ${currentDate} ${currentMonths} ${currentYear}`
}

setInterval(updateDate, 1000)
// Обновление даты дня в Header

// Burger
let maxWidth = 890;
const burgerIcon = document.querySelector('.burger')
const burgerContent = document.querySelector('.burger__content')

burgerIcon.addEventListener('click', function showBurgerContent(){
    console.log(1)
    burgerContent.classList.toggle('close')
})

window.addEventListener('resize', function closeBurgerContent(){
    if(document.documentElement.clientWidth > maxWidth){
        burgerContent.classList.add('close')
    }
})
// Burger

