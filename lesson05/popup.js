const button = document.querySelector('button')
const popup = document.querySelector('.popup')
const close = popup.querySelector('.popup-close')

button.addEventListener('click', () => {
  popup.style.display = 'block'
})

// close.addEventListener('click', () => {
//   popupClose()
// })

popup.addEventListener('click', e => {
  if (
    e.target.classList.contains('popup') ||
    e.target.classList.contains('popup-close')
  ) {
    popupClose()
  }
})

function popupClose() {
  popup.style.display = 'none'
}