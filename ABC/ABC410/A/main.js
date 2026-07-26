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

// N行の整数
const A = input[index++].split(" ").map(Number);

const K = Number(input[index++]);

ans = 0;
for (const element of A) {
  if (K <= element) {
    ans++;
  }
}

console.log(ans);

// ===============================
// 処理
// ===============================

// ===============================
// 出力
// ===============================

// console.log(ans);
