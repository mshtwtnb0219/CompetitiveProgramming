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
const N = Number(input[index++]);

// 1つの文字列
const S = input[index++];
// if ('o' !== S.slice(0, 1) || 'oo' !== S.slice(0, 2)) {
//   console.log(S);
// } else {
//   // ()最初に該当する文字列だけ
//   const str = S.replace(/^o+/, "");
//   console.log(str);
// }

let bool = false;
let str = [];

for (let i = 0; i < N; i++) {
  if ("o" == S.slice(i, i + 1)) {
    if (bool) {
      str.push(S.slice(i, i + 1));
    }
  } else {
    bool = true;
    str.push(S.slice(i, i + 1));
  }
}

console.log(str.join(""));

// スペース区切りの整数
// const [A, B] = input[index++].split(" ").map(Number);

// N個の整数
// const A = input[index++].split(" ").map(Number);

// N行の整数
// const A = [];
// for (let i = 0; i < N; i++) {
//   A.push(Number(input[index++]));
// }

// N行の文字列

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
