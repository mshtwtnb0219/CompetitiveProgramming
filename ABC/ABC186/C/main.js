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
let N = Number(input[index++]);

ans = 0;

// 10進数　→ 8進数に変換
// const convert = () => {
//   while (n > 0) {
//     const remainder = n % 8; // 余り
//     result = remainder + result;
//     n = Math.floor(n); // 商
//   }

//   return result;
// };

for (let i = 1; i < N + 1; i++) {
  if (!String(i).includes("7") && !String(i.toString(8)).includes("7")) {
    ans++;
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

// num = String(N).split("");
// 配列の要素の入れ替え　昇順
// num.sort((a, b) => a.localeCompare(b));
// console.log(num);
// 配列の要素の入れ替え　降順
// num.sort((a, b) => b.localeCompare(a));
// console.log(num);

// Number("001") // 1
// Number("007") // 7
// Number("010") // 10
// Number("100") // 100

// ===============================

// ===============================
// 出力
// ===============================

// console.log(ans);
