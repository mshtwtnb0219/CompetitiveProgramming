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
const N = Number(input[index++]);
let ans = "";
pivot = 0;

if (N % 2 == 0) {
  pivot = N / 2 - 1;
  for (let i = 0; i < N; i++) {
    if (pivot == i || pivot + 1 == i) {
      ans = ans + "=";
    } else {
      ans = ans + "-";
    }
  }
} else {
  pivot = Math.round(N / 2) - 1;
  for (let i = 0; i < N; i++) {
    if (pivot == i) {
      ans = ans + "=";
    } else {
      ans = ans + "-";
    }
  }
}

console.log(ans);

// 1つの文字列
// const S = input[index++];

// スペース区切りの整数
// const [A, B] = input[index++].split(" ").map(Number);

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
