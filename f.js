//分发饼干
//尽可能的满足孩子，得到最终满足孩子的最大数量

let findContentChildren = (s, g) => {
  s.sort((a, b) => a - b);
  g.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let count = 0;
  while (i < s.length && j < g.length) {
    if (s[i] <= g[j]) {
      count++;
      i++;
      j++;
    } else {
      j++;
    }
  }
  return count;
};
let a = findContentChildren([1, 2, 3], [1, 1]);
console.log(a);
