// for文
for (let i = 0; i < 5; i++) {
  console.log(i)
}
console.log('ループ終了')

const maker = ['TOYOTA', 'HONDA', 'NISSAN', 'SUZUKI'];
// maker[1] // HONDA
console.log(maker)

for (let i = 0; i < maker.length; i++) {
  console.log(maker[i])
}

let j = 0
while (j < 3) {
  console.log(j)

  j++
}

const age = 17
if (age >= 18) {
  console.log('あなたには選挙権があります')
}

const password = 'abcde'
// if (password.length < 8) {
//   console.log('パスワードは８文字以上で入力して下さい')
// }

// if (password.length >= 8) {
//   console.log('パスワードの文字数はOKです')
// } else {
//   console.log('パスワードは８文字以上で入力して下さい')
// }

if (password.length >= 12) {
  console.log('とても強いパスワードです')
} else if (password.length >= 8) {
  console.log('良いパスワードです')
} else {
  console.log('パスワードは８文字以上で入力して下さい')
}

const password2 = 'fbjkd34567890d'
if (
  password2.length >= 12 &&
  password2.includes('@')
) {
  console.log('サクセス: とても強いパスワードです')
} else {
  console.log('エラー: パスワードは12文字以上で且つ、@を含めて下さい')
}

if (
  password2.length >= 12 ||
  password2.includes('@')
) {
  console.log('サクセス: とても強いパスワードです')
} else {
  console.log('エラー: パスワードは12文字以上か、@を含めて下さい')
}

const isLogin = true
if (!isLogin) {
  console.log('ログインして下さい')
}


let scores = [50, 40, 30, 0, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {

  if (scores[i] === 0) {
    continue
  }

  console.log('あなたのスコア: ', scores[i]);

  if (scores[i] === 100) {
    console.log('100点獲得しました！');
    break;
  }

}

let grade = 'Z'

switch (grade) {
  case 'A':
    console.log('優秀！')
    break
  case 'B':
    console.log('良い')
    break
  case 'C':
    console.log('普通')
    break
  case 'D':
    console.log('がんばりましょう')
    break
  case 'E':
    console.log('落第')
    break
  default:
    console.log('不明')

}

let size = 25

if (true) {
  let size = 26
  // console.log(size)
  let brand = 'nike'
}
console.log(size, brand)



var abc = 10
if (true) {
  console.log(abc)
}