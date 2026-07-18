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
const [M, D] = input[index++].split(" ").map(Number);
const target = [M, D];

const part1 = [1, 7];
const part2 = [3, 3];
const part3 = [5, 5];
const part4 = [7, 7];
const part5 = [9, 9];

bool = false;

const parts = [part1, part2, part3, part4, part5];
for (const innner of parts) {
  if (JSON.stringify(innner) === JSON.stringify(target)) {
    bool = true;
  }
}

console.log(bool ? "Yes" : "No");

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
