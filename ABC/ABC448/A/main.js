// ===============================
// 競技プログラミング用テンプレート
// ===============================

const console = require("console");
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
let [N, X] = input[index++].split(" ").map(Number);

// N個の整数
const A = input[index++].split(" ").map(Number);

// 出力
let result = [];
for (let i = 0; i < N; i++) {
  if (A[i] < X) {
    result.push(1);
    X = A[i];
  } else {
    result.push(0);
  }
}

console.log(result.join("\n"));

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
