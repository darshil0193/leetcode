/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @link https://leetcode.com/problems/two-sum/description/
 */
var twoSum = function(nums, target) {
    for(var i=0; i< nums.length; ++i) {
        for(var j= i+ 1; j<nums.length; ++j) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// alert(twoSum([2, 7, 11, 15], 9));