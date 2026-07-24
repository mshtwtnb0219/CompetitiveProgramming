// ===============================
// 競技プログラミング用テンプレート
// ===============================

const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf8")
  .trim()
  .split("\n");

let index = 0;

// ===============================
// 入力
// ===============================

// 1つの整数
// const N = Number(input[index++]);

// 1つの文字列
// const S = input[index++];

// スペース区切りの整数
const [X, Y] = input[index++].split(" ").map(Number);

if (X > 12) {
  ans = Y;
} else if (X + Y > 12) {
  ans = X + Y - 12;
} else {
  ans = X + Y;
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
// 出力
// ===============================

// console.log(ans);
