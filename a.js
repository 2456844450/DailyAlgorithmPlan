//字符串中求最大不重复字符串


//教材
function func(str) {
  let a,
    b = 0;

  let s = new Set();

  for (a = 0; a < str.length; a++) {
    if (a !== 0) {
      s.delete(str[a - 1]);
    }
    //a是左指针
    while (b < str.length && !s.has(str[b])) {
      s.add(str[b]);
      b++;
    }
    console.log("s", s);
    if (b == str.length) {
      break;
    }
  }
}

//自己
function func(str) {
  let j = 0;
  let n = str.length;
  let res = "";
  let r = "";
  while (1) {
    while (j < n && res.indexOf(str[j]) === -1) {
      res += str[j];
      j++;
    }
    if (res.length > r.length) {
      r = res;
      console.log("r", r);
    }
    if (j < n) {
      //找到重复的了
      res = res.slice(res.indexOf(str[j]) + 1);
    } else {
      break;
    }
  }
  return r;
}

func("aasdasasfqwe");
