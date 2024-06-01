const form = document.querySelector('.signup-form')
// const username = form.querySelector('#username')

// const username = 'taroyamada'
const pattern = /^[a-zA-Z0-9]{6,12}$/
const message = document.querySelector('.message')
console.log(pattern.test(username))

form.addEventListener('submit', e => {
  e.preventDefault()

  if (pattern.test(form.username.value)) {
    message.textContent = '使用できるユーザー名です'
  } else {
    message.textContent = 'ユーザー名に使用できない文字が含まれています'
  }
})

form.username.addEventListener('keyup', e => {
  console.log(e.target.value)
  if (pattern.test(e.target.value)) {
    e.target.classList.remove('error')
    e.target.classList.add('success')
  } else {
    e.target.classList.remove('success')
    e.target.classList.add('error')
  }
})