const boxes = document.querySelectorAll('.box')
const selectCard = (e) => {
    const box = e.target
    box.classList.add('front')
    setTimeout(() => {
        box.classList.remove('front')
    }, 2000)
}

boxes.forEach((box) => {
    box.addEventListener('click', selectCard)
})