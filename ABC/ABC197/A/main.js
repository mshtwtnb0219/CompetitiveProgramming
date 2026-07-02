// 標準入力
const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf8")
  .trim()
  .split("\n");

let index = 0;

// ===== 入力 =====

// const N = Number(input[index++]);
// const S = input[index++];
const [A, B, C] = input[index++].split(" ").map(Number);
// const A = input[index++].split(" ").map(Number);
console.log(A ** 2 + B ** 2 < C ** 2 ? "Yes" : "No");

// ===== 処理 =====

// ===== 出力 =====
