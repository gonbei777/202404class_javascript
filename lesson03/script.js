// 関数宣言
greet()
function greet() {
  console.log('こんにちは')
}



// 関数式
/**
 * 挨拶の言葉を出力する関数
 * @param string greet 挨拶の文字列
 * @param string name 人名
 */
const speak = function (greet = 'こんにちは', name = '名無し') {
  console.log(`${greet}、${name}さん。`)
}
speak('おはようございます', '太郎')
speak('こんばんは')
speak('ごきげんよう')
speak()

//円の面積を求める関数
function calcArea(r) {
  return Math.PI * r ** 2
}
let area = calcArea(5)
console.log(area)

// const calcArea2 = function (r) {}
// const calcArea2 = (r) => {
//   return Math.PI * r ** 2
// }
const calcArea2 = r => Math.PI * r ** 2
console.log(calcArea2(8))

// 問題1
const hello = () => '世界の皆さんこんにちは'
console.log(hello())

// 問題2
const calculator = (price, tax) => {
  let total = 0;
  for (let i = 0; i < price.length; i++) {
    total += price[i] + price[i] * tax;
  }
  return total;
}

let priceTable = [100, 50, 80, 2000]
let tax = 0.1
console.log(calculator(priceTable, tax))

// コールバック関数
const funcA = callback => {
  console.log('関数A実行')
  let xyz = 20
  callback(xyz)
}

const funcB = value => {
  console.log('値:', value)
}

funcA(funcB)

let train = ['山手線', '中央線', '京浜東北線', '埼京線', '湘南新宿ライン'];

const logTrain = (value, index) => {
  console.log('JRの路線: ', value, index)
}

train.forEach(logTrain)
const newTrain = train.map(value => 'JR' + value)
console.log(newTrain)

let trainHtml = ''
train.forEach(train => {
  // trainHtml = trainHtml + `<li>${train}</li>`
  trainHtml += `<li>${train}</li>`
})

console.log(trainHtml)

const ul = document.querySelector('.train')
console.dir(ul)

ul.innerHTML = trainHtml