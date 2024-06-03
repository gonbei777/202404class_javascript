const answers = ['B', 'B', 'A', 'B', 'B']
const form = document.querySelector('.quiz-form')
const scorePoint = 100 / answers.length // 5
const result = document.querySelector('.result')
const resultScore = result.querySelector('.result-score')
let score = 0

form.addEventListener('submit', e => {
  // フォームの送信阻止
  e.preventDefault()

  // console.log(form.q1.value)
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ]
  console.log(userAnswers)

  if (userAnswers.includes('')) {
    alert('解答していない問題があります')
    return // 関数の処理をストップする
  }

  score = 0

  userAnswers.forEach((answer, index) => {

    if (answer === answers[index]) {
      score += scorePoint
    }

  })

  result.classList.remove('d-none')
  scrollTo(0, result.offsetTop)

  let scoreCount = 0

  let timerID = setInterval(() => {

    resultScore.textContent = scoreCount

    if (scoreCount === score) {
      clearInterval(timerID)
      return
    }

    scoreCount++

  }, 10)

  // console.log(score)
  // resultScore.textContent = score


  // score = 0;

})

/*
setTimeout(() => {
  console.log('３秒経ちました')
}, 3000)
setInterval(() => {
  console.log('３秒経ちました')
}, 3000)

scrollTo(0, 200)
*/