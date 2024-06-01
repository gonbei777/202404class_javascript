const h1 = document.querySelector('.copy')
h1.addEventListener('copy', () => {
  console.log('コピーしましたね')
})

h1.addEventListener('selectstart', e => {
  console.log('選択しましたね')
  e.preventDefault()
})

const move = document.querySelector('.move')
const square = move.querySelector('.square')
move.addEventListener('mousemove', e => {
  console.log(e.offsetX, e.offsetY)
  square.style.top = e.offsetY + 'px'
  square.style.left = e.offsetX + 'px'
})

document.addEventListener('scroll', e => {
  console.log(e.target.documentElement.scrollTop)
})