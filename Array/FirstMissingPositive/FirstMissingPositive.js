/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const set = new Set()
    for(let i=0;i<nums.length;i++){
        set.add(nums[i])
    }
    for(let j=1;j<=nums.length+1;j++){
        if(!set.has(j)){
            return j
        }
    }
    return 1
};
