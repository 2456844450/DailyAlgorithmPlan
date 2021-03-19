//两个排序数组的中位数

function func(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return func(nums2, nums1);
  }

  let m = nums1.length;
  let n = nums2.length;
  let left = 0,
    right = m;

  let median1 = 0,
    median2 = 0;

  while (left <= right) {
    let i = parseInt((left + right) / 2);
    let j = parseInt((m + n + 1) / 2) - i;

    if (nums1[i - 1] < nums2[j]) {
      median1 = Math.max(nums1[i - 1], nums2[j - 1]);
      median2 = Math.min(nums1[i], nums2[j]);
      left = i + 1;
    } else {
      right = i - 1;
    }
  }
  return (m + n) % 2 == 0 ? (median1 + median2) / 2 : median1;
}

let a = func([1, 3, 5], [2, 4, 6]);
console.log(a);


