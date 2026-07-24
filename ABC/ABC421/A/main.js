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

// N行の文字列
let S = [];
for (let i = 0; i < N + 1; i++) {
  S.push(input[index++]);
}

// スペース区切りの文字列
const [num, name] = S[N].split(" ").map(String);

console.log(name === S[num - 1] ? "Yes" : "No");
