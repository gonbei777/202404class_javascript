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