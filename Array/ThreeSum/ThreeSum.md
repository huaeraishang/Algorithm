## 三数之和
### 思路

1. 避免出现重复的结果，首先对数组进行排序
2. 从数组中选取一个数nums[i],取此数后面的区间左侧L,
右侧R, 左右对进，计算三个数的和，如果等于0，加入统计
的数组
  
3. 几种需要处理的情况

（1）nums[i] > 0, 因为数组已经从小到大排序，三数之和不可能
等于0

（2）nums[i]===nums[i-1],跳过

（3）nums[L]===nums[L+1],跳过

（4）nums[R]===nums[R-1],跳过

### [leetcode链接](https://leetcode-cn.com/problems/3sum/)




