/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = []
    if(!nums || nums.length < 3) {
        return ans
    }

    nums.sort((a,b)=> a - b)

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) {
            // 大于0时，跳出循环
            break
        }

        if(i > 0 && nums[i] === nums[i - 1]){
            // 前后两数相等时，继续下一次循环
            continue
        }

        let L = i + 1
        let R = nums.length - 1
        while (L < R){
            const sum = nums[i] + nums[L] + nums[R]
            if(sum === 0){
                ans.push([nums[i], nums[L], nums[R]])
                while (L < R && nums[L] === nums[L+1]){
                    L++
                }
                while (L < R && nums[R] === nums[R-1]){
                    R--
                }
                L++
                R--
            }else if(sum < 0){
                L++
            }else if(sum > 0){
                R--
            }
        }
    }
    return  ans


};

