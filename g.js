//最接近三数之和

let threeSumClosest = function (nums, target) {
  let res;
  let basic;
  let n = nums.length;
  if (n === 3) {
    return getSum(nums);
  }
  let min = Infinity;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    //留两个元素才能凑成三个

    basic = nums[i];
    let left = i + 1,
      right = n - 1;
    while (left < right) {
      let sum = basic + nums[left] + nums[right];
      let diff = Math.abs(sum - target);

      if (diff < min) {
        min = diff;
        res = sum;
      }
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
  }
  return res;
};

function getSum(nums) {
  return nums.reduce((total, cur) => total + cur, 0);
}

let nums = [1, 5, 3, 6, -11, -3],
  target = 1;
let a = threeSumClosest(nums, target);
console.log(a);
