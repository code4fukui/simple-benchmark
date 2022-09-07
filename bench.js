const cnt = 1_000_000_000;

const t01 = performance.now();
for (let i = cnt; i >= 0; i--) {
}
const t1 = performance.now() - t01;
console.log(t1 >> 0, "msec (null loop)");

let sum = 0;
const t02 = performance.now();
for (let i = cnt; i >= 0; i--) {
  sum += i;
}
const t2 = performance.now() - t02;
console.log(t2 >> 0, "msec (add loop)");
console.log(sum);

console.log(cnt / (t2 - t1) >> 0, "operations / sec");
