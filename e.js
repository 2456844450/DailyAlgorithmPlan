//接雨水

function trap(height) {
  let left = 0,
    right = height.length - 1;
  let left_max = 0,
    right_max = 0,
    ans = 0;
  while (left < right) {
    //右边的柱子高
    if (height[left] < height[right]) {
      if (height[left] > left_max) {
        //且是左边中所有最高的 更新最高值
        left_max = height[left];
      } else {
        ans += left_max - height[left];
      }
      left++;
    } else {
      //左边的柱子高
      if (height[right] > right_max) {
        //且是右
        //边中所有最高的 更新最高值
        right_max = height[right];
      } else {
        ans += right_max - height[right];
      }
      right--;
    }
  }
  return ans;
}

console.log(trap([1, 3, 0, 0, 4, 1, 2]));
