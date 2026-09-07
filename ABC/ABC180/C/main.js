const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? 0 : "./input.txt", "utf8")
  .trim()
  .split(/\r?\n/);

let index = 0;

const N = Number(input[index++]);

const A = [];

for (let i = 0; i < 3; i++) {
  A.push(input[index++].split(" ").map(Number));
}

let ans = 0;

// A[0] の各値が何回出るか数える
const count = Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
  count[A[0][i]]++;
}

// 各 j について B[C[j]] を求める
for (let j = 0; j < N; j++) {
  const value = A[1][A[2][j] - 1];

  ans += count[value];
}

console.log(ans);
