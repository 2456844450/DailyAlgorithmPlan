// 串联所有单词的子串
//数组多元素随机组合的所有情况
//递归解法
function findSubstring(s, words) {
  let result = [];
  // 数组长度
  let num = words.length; // 2
  let range = (r, arr) => {
    //arr words
    // 到达边界，停止递归
    if (r.length === num) {
      result.push(r);
    } else {
      arr.forEach((i, index) => {
        // 克隆数组
        let tmp = [].concat(arr);
        // 删除数组中已经要合并的元素
        tmp.splice(index, 1);
        range(r.concat(i), tmp);
      });
    }
  };
  range([], words);

  console.log(result);
  // 放置位置的数组
  let placeAry = [];
  result.forEach((item) => {
    // 数组转换成字符串
    let str = item.join("");
    if (s.includes(str)) {
      const p = s.indexOf(str);
      placeAry.push(p);
    }
  });
  return placeAry;
}
console.log(findSubstring("barfoothebarfoothefoobarman", ["foo", "bar"])); // [0, 9]
