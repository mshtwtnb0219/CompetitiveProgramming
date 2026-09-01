// ===============================
// 競技プログラミング用テンプレート
// ===============================

const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf8")
  .trim()
  .split(/\r?\n/);

let index = 0;

// ===============================
// 入力
// ===============================

// 1つの整数
// const N = Number(input[index++]);

// 1つの文字列
// const S = input[index++];

// スペース区切りの整数
let [N, K] = input[index++].split(" ").map(Number);

ans = N;
// g1 大きい順に並び変え
const g1 = (arr) => {
  num = String(arr).split("");
  num.sort((a, b) => b.localeCompare(a));
  return num;
};

// g2 小さい順に並び変え
const g2 = (arr) => {
  num = String(arr).split("");
  // 0を排除
  newArr = [];
  for (const ele of num) {
    if (ele != "0") newArr.push(ele);
  }
  newArr.sort((a, b) => a.localeCompare(b));
  return newArr;
};

// f g1 - g2
const f = (arr1, arr2) => {
  ans = 0;

  newArr1 = "";
  newArr2 = "";

  for (const ele of arr1) {
    newArr1 = newArr1 + ele;
  }

  for (const ele of arr2) {
    newArr2 = newArr2 + ele;
  }

  ans = Number(newArr1) - Number(newArr2);
  return ans;
};

for (let i = 0; i < K; i++) {
  if (i == 0) {
    ans = f(g1(N), g2(N));
  } else {
    ans = f(g1(ans), g2(ans));
  }
}

console.log(ans);

// スペース区切りの文字列
// const [A, B] = input[index++].split(" ").map(String);

// N個の整数
// const A = input[index++].split(" ").map(Number);

// N行の整数
// const A = [];
// for (let i = 0; i < N; i++) {
//   A.push(Number(input[index++]));
// }

// N行の文字列
// const S = [];
// for (let i = 0; i < N; i++) {
//   S.push(input[index++]);
// }

// H×Wのグリッド
// const grid = [];
// for (let i = 0; i < H; i++) {
//   grid.push(input[index++]);
// }

// H×Wの数値グリッド
// const grid = [];
// for (let i = 0; i < H; i++) {
//   grid.push(input[index++].split(" ").map(Number));
// }

// ===============================
// 処理
// ===============================

// ===============================
// 便利関数

//string.matchを使った正規表現で文字列がすべてが大文字ならtrue
// const isUpperCase = (str) => {
//   const arr = str.match(/^[A-Z]+$/);
//   return arr ? true : false;
// };

//string.matchを使った正規表現で文字列がすべてが子文字ならtrue
// const isUpperCase = (str) => {
//   const arr = str.match(/^[A-Z]+$/);
//   return arr ? true : false;
// };

// ===============================

// ===============================
// 出力
// ===============================

// console.log(ans);
