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
const [N, D] = input[index++].split(" ").map(Number);

// スペース区切りの文字列
const S = input[index++].split("").map(String);

eat = false;
count = 0;

for (let i = 0; i < D; i++) {
  eat = false;
  for (let j = 0; j < N; j++) {
    if (!eat) {
      if ("@" == S[j]) {
        S[j] = ".";
        eat = true;
      }
    }
  }
}

for (const ele of S) {
  if ("." == ele) {
    count++;
  }
}

console.log(count);

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
