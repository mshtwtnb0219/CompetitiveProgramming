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
let [A, B, C, D] = input[index++].split(" ").map(Number);
count = 0;

kaisuu = 0;

while (kaisuu < 6) {
  if (A == B && A != 0 && B != 0) {
    A = 0;
    B = 0;
    count++;
  } else if (A == C && A != 0 && C != 0) {
    A = 0;
    C = 0;
    count++;
  } else if (A == D && A != 0 && D != 0) {
    A = 0;
    D = 0;
    count++;
  } else if (B == C && B != 0 && C != 0) {
    B = 0;
    C = 0;
    count++;
  } else if (B == D && B != 0 && D != 0) {
    B = 0;
    D = 0;
    count++;
  } else if (C == D && C != 0 && D != 0) {
    C = 0;
    D = 0;
    count++;
  }

  kaisuu++;
}

console.log(count);

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
