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

// 10進数　→ N進数
// (83).toString(2); // "1010011"  2進数
// (83).toString(8); // "123"      8進数
// (83).toString(10); // "83"       10進数
// (83).toString(16); // "53"       16進数

// 自力で10進数　→　N進数変換  ※これは8進数に変換
// let N = Number(input[index++]);
// result = "";

// while (N > 0) {
//   const remainder = N % 8; // 余り
//   result = remainder + result;
//   N = Math.floor(N / 8); // 商
// }

// const count = Array(N + 1).fill(0);

// for (let i = 0; i < N; i++) {
//   const num = A[0][i]; // 今見ている数字
//   count[num]++;        // その数字の登場回数を+1
// }

// ===============================

// ===============================
// 出力
// ===============================

// console.log(ans);
