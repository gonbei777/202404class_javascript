const p = document.querySelector('.error')

console.log(p)

const ptags = document.querySelectorAll('p')
console.log(ptags)

// ptags.forEach(p => {
//   p.textContent += '新しいコンテンツ'
// })

const content = document.querySelector('.content p')
console.log(content.innerText)
content.innerText = '上書きしたコンテンツ'
content.textContent = 'さらに上書きしたコンテンツ'

content.innerHTML = '<span>もう1回コンテンツを上書き</span>'

// console.dir(content)
const parent = content.parentElement

const fruits = ['りんご', 'バナナ', 'ブドウ']

fruits.forEach(fruit => {
  parent.innerHTML += `<p>${fruit}</p>`
})

const link = document.querySelector('a')
const href = link.getAttribute('href')
console.log(href)

const error = document.querySelector('.error')
error.setAttribute('style', 'color: red;')

link.setAttribute('href', 'https://yahoo.co.jp')

const title = document.querySelector('.h1dom')
// title.setAttribute('style', 'background: blue')
console.log(title.style)
title.style.backgroundColor = 'blue'
title.style.color = ''
title.style.cssText = 'padding: 50px; background: gold; color: red;'

console.log(error.classList.contains('asfa'))

error.classList.remove('error')
error.classList.add('success')

const messages = document.querySelectorAll('.message > p')
messages.forEach(message => {
  const text = message.textContent
  // エラーが含まれているかどうか
  if (text.includes('エラー')) {
    message.classList.add('error')
  }

  // サクセスが含まれているかどうか
  if (text.includes('サクセス')) {
    message.classList.add('success')
  }

})

const article = document.querySelector('article')
console.log(article.children)

const articleArr = Array.from(article.children)
console.log(articleArr)
articleArr.forEach(child => {
  child.classList.add('test')
})

// 子孫要素
article.querySelector('h2')

// 親要素
console.log(article.parentElement.parentElement)

// 先祖要素
console.log(article.closest('html'))

// 兄弟要素
const heading = document.querySelector('article h2')
console.dir(heading)
console.log(heading.previousElementSibling) // null

// ToDoリスト
const button = document.querySelector('button')
const ul = document.querySelector('ul')
const input = document.querySelector('input[type=text]')
// button.onclick = function () {
//   console.log('ボタンをクリックしました')
// }

button.addEventListener('click', () => {
  // ul.innerHTML += '<li>新しいToDo</li>'
  const li = document.createElement('li')
  console.dir(input.value)
  if (input.value !== '') {
    li.textContent = input.value
    ul.append(li) //末尾に追加 prepend: 先頭に追加
    input.value = ''
  } else {
    alert('未入力では追加できません')
  }
})

// const lists = document.querySelectorAll('ul li')
// lists.forEach(list => {
//   list.addEventListener('click', e => {
//     e.stopPropagation()
//     // e.target.style.textDecoration = 'line-through'
//     e.target.remove()
//   })
// })

ul.addEventListener('click', e => {
  console.log('ulをクリックしました')
  console.dir(e.target.tagName)
  if (e.target.tagName === 'LI') {
    e.target.remove()
  }
})