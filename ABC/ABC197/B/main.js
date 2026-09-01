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
let [H, W, x, y] = input[index++].split(" ").map(Number);
let X = x - 1;
let Y = y - 1;

// N行の文字列
const S = [];
for (let i = 0; i < H; i++) {
  S.push(input[index++].split("").map(String));
}

ans = 1;
// 上
for (let i = X - 1; i >= 0; i--) {
  if (S[i][Y] === "#") {
    break;
  }
  ans++;
}

// 下
for (let i = X + 1; i < H; i++) {
  if (S[i][Y] === "#") {
    break;
  }
  ans++;
}

// 右
for (let i = Y + 1; i < W; i++) {
  if (S[X][i] === "#") {
    break;
  }
  ans++;
}

// 左
for (let i = Y - 1; i >= 0; i--) {
  if (S[X][i] === "#") {
    break;
  }
  ans++;
}

// console.log(S);
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
