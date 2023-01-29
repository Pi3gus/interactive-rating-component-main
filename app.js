const rates = document.querySelectorAll('[data-number]')
const submit = document.querySelector('.submit')
const mainCard = document.querySelector('.ratingCard')
const secondCard = document.querySelector('.thanksCard')
const rating = document.getElementById('rating')

submit.addEventListener('click' , () => {
    secondCard.classList.remove('hidden')
    mainCard.style.display = 'none'
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML =rate.innerHTML
    })
})